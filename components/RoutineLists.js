import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import icon from '../public/icon.jpg'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const RoutineList = styled.li`
  border: 3px outset black;
  display: flex;
  flex-direction: column;
`;

const RoutineItem = styled.a`
  padding: 0 20px;
  border: 2px solid black;
  list-style: none;
  margin: 20px;
  border-radius: 20px;
  background-color: white;
  font-size: 1rem;
  padding: 20px;
  vertical-align: middle;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const RoutineTitle = styled.h2`
  /* margin-left: 20px; */
  padding: 40px 0;
`;

const RoutineTime = styled.h4`
  /* margin-left: 20px; */
  padding: 30px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  vertical-align: middle;
  padding: 40px 0;
`;

const RoutineButton = styled.button`
  flex: 1 1 auto;
`;

export default function RoutineLists({routine, getRoutine}) {
  const login = useSelector(state => state.login);
  const deleteRoutine = async (id) => {
    const url = `http://localhost:8000/routine?userid=${login.id}&id=${id}`
    await axios.delete(url)
    .then((res)=> {
      getRoutine();
    })
  }

  console.log(login.id)
  const getRoutineName = (e) => {
    const id = e.target.id
    // console.log(e.target.id)
    deleteRoutine(id)
  }

  return (
    <RoutineList>
      <RoutineItem>
        <Image
        src={icon}
        width={80}
        height={80}
        alt="아이콘"
        />
        <RoutineTitle>
          {routine.name}
        </RoutineTitle>
        <RoutineTime>
          {routine.finished_time}분
        </RoutineTime>
        <ButtonContainer>
          <RoutineButton id={routine.id} onClick={getRoutineName}>삭제</RoutineButton>
        </ButtonContainer>
      </RoutineItem>
    </RoutineList>
  )
}
