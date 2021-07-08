import React, { useState, useEffect } from 'react';
import Dnd from './Dnd.jsx'
import styled from 'styled-components';
import Nav from '../../src/components/Nav';
import initialData from './initData';
import axios from 'axios';

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

function Workout () {
  const [routineId, setRoutineId] = useState(null)

  const [isClick, setIsClick] = useState(false)
  const [title, setTitle] = useState(null)
  console.log(routineId)
  
  const titleHandler = () => {
    if (!isClick) {
      setIsClick(true)
    } else {
      setIsClick(false)
    }  
  };  

  const onChange = (e) => {
    const { value } = e.target;
    setTitle(value);
    console.log(value)
  };  

  const saveHandler = () => {
    updateWorkout();
    titleHandler();
  };  
  
  useEffect(() => {
    const routineInfo = JSON.parse(localStorage.getItem('routineInfo'))
    setRoutineId(routineInfo.id)
  })


  const updateWorkout = async () => {
    const url = `http://localhost:8000/routine`
    const body = {
      routine_id: routineId,
      routine_name: title,
      // exercise_array: exArr
    }  
    console.log(exArr)
    await axios.patch(url, body)
    .then((res) => {
      console.log(res)
      getWorkout(userId, routineId) 
    })  
  }  
  
  return (
    <>
      <Nav></Nav>
        {isClick? 
        <TitleContainer>
          <RoutineTitle>{title}</RoutineTitle>
          <TitleButton onClick={titleHandler}>제목 수정</TitleButton>
        </TitleContainer>
        :
        <TitleContainer>
          <InputTitle placeholder="변경할 이름을 입력하세요" onChange={onChange}></InputTitle>
          <SaveButton onClick={saveHandler}>저장</SaveButton>
        </TitleContainer>
      }
      <Dnd></Dnd>
      {/* <Container> */}
      {/* <Link 
        href="/add"
        styles={{backgroundColor: darkColors.lightBlue, color: lightColors.white}}
        >
          +
        </Link> */}
        {/* <Button
          onClick={() => router.push(`/add`)}
          tooltip="나만의 운동 만들기!"
          icon="fas fa-plus"
          rotate={true}
          styles={{backgroundColor: darkColors.lightBlue, color: lightColors.white}}
        >
          +</Button>
      </Container> */}
    </>
  );
}

export default Workout;
