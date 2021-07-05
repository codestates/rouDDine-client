import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import icon from '../public/icon.jpg'
import { useRouter } from 'next/router'
import { useSelector, useDispatch, useCallback } from 'react-redux';
import {useState, useEffect} from 'react'
import {getRoutineId} from '../reducers/routine_id'
// import useLocalStorage from '../utils/useLocalStorage'

import axios from 'axios';

const RoutineList = styled.li`
  border: 3px outset black;
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

const RoutineItem = styled.div`
  padding: 0 20px;
  flex: 3 0 auto;
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

const DeleteButton = styled.button`
  flex: 1 1 auto;
`;

export default function RoutineLists({routine, getRoutine}) {
  const dispatch = useDispatch()
  const router = useRouter();
  const userId = useSelector(state => state.login.userId);

  const deleteRoutine = async (id) => {
    const url = `http://localhost:8000/routine?routine_id=${id}`
    await axios.delete(url)
    .then((res)=> {
      getRoutine();
      console.log(`${userId}의 루틴을 삭제했습니다`)
    })
  }
  
return (
  <RoutineList>
    <RoutineItem    
    id={routine.id}
    onClick={() => router.push(`/workout/${routine.id}`)}
    // onClick={(e) => getRoutineEvent(e)}
    >
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
    </RoutineItem>
    <ButtonContainer>
      <DeleteButton 
      id={routine.id} 
      onClick={(e)=>deleteRoutine(e.target.id)}
      >삭제</DeleteButton>
    </ButtonContainer>
  </RoutineList>
  )
}
  