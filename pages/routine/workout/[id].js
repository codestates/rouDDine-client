import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Dnd from './Dnd/Dnd.jsx'

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 999;
  opacity: ${(props) => (props.isOpen ? "100%" : "0")};
  top: ${(props) => (props.isOpen ? "0" : "-100%")};
  padding-bottom: 100px;
`;

export const ModalSection = styled.section`
  background: rgba( 255, 255, 255, 0.90 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  border-radius: 10px;
  margin-top: 50px;
  margin-bottom: 190px;
  padding: 50px 0;

  /* padding: 80px; */
  /* -webkit-backdrop-filter: blur( 12.0px ); */
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  position: fixed;
  display: flex;
  justify-content: center;
  min-width: 70%;
  max-height: 90%;
  flex-direction: column;
  /* overflow-y: scroll; */

  /* @media screen and (max-width: 768px) {
    min-width: 80%;
  }

  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 50%;
  } */
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
const RoutineTitle = styled.div`
  font-size: 2rem;
  text-align: center;
`;
const InputTitle = styled.input`

`;
const TitleButton = styled.button`
  
`;
const SaveButton = styled.button`
  
`;

const CloseButton =styled.button`
  position: absolute;
  cursor: pointer;
  right: 0;
  top: 0;
`;

function Workout({
  title,
  setTitle,
  toggle, 
  isOpen,
  routines,
  routineId, 
  workouts, 
  setWorkouts, 
  getWorkout, 
  userId
}) {

  const [isClick, setIsClick] =useState(false)

  const saveHandler = () => {
    updateWorkout(routineId, title);
    titleHandler();
  };  

  const onChange = (e) => {
    const { value } = e.target;
    setTitle(value);
    console.log(value)
  };  

  const titleHandler = () => {
    setIsClick(!isClick)
  };  
  
  const updateWorkout = async (routineId, title, userId) => {
    const url = `http://localhost:8000/routine`
    const body = {
      routine_id: routineId,
      routine_name: title,
    }  
    await axios.patch(url, body)
    .then((res) => {
      console.log(res)
      // getWorkout(userId, routineId)
    })  
  }  


  return (
    <>
    <ModalContainer toggle={toggle} isOpen={isOpen}>
      <ModalSection>
        {isClick? 
          <TitleContainer>
            <RoutineTitle>{workouts.name}</RoutineTitle>
            <TitleButton onClick={titleHandler}>제목 수정</TitleButton>
          </TitleContainer>
          :
          <TitleContainer>
            <InputTitle placeholder="변경할 이름을 입력하세요" onChange={onChange}></InputTitle>
            <SaveButton onClick={saveHandler}>저장</SaveButton>
          </TitleContainer>
        }
        <CloseButton
          onClick={(e) => {
            toggle(e);
          }}>
          닫기
          </CloseButton>
        <Dnd
        saveHandler={saveHandler}
        setIsClick={setIsClick}
        title={title}
        setTitle={setTitle}
        setWorkouts={setWorkouts}
        routineId={routineId}
        workouts={workouts} 
        />
      </ModalSection>
    </ModalContainer>
    </>
  )
}

export default Workout