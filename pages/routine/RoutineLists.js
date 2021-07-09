import React, { useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import icon from '../../public/icon.jpg';
import axios from 'axios';
import router from 'next/router';
// import Workout from '../api/workout/[id]'

const RoutineList = styled.li`
  border: 3px outset black;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  justify-content: space-between;
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

const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-wrap: row;
  justify-content: space-around;
  flex: 1 0 auto;
`;

const RoutineTitle = styled.h1`
  padding: 40px 0;
`;

const RoutineTime = styled.h3`
  text-align: center;
  vertical-align: middle;
  padding: 50px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  vertical-align: middle;
  padding: 50px 0;
`;

const DeleteButton = styled.button`
  flex: 1 1 auto;
`;

const RoutineContainer = styled.div``;

export default function RoutineLists({
  routines,
  workouts,
  title,
  setTitle,
  routineId,
  setRoutineId,
  getWorkout,
  routine,
  getRoutine,
  userId,
  toggle,
}) {
  const deleteRoutine = async (id) => {
    const url = `http://localhost:3000/routine?routine_id=1`;
    await axios.delete(url).then((res) => {
      console.log(`${userId}의 루틴을 삭제했습니다`);
      console.log(res);
      getRoutine(userId, routineId);
    });
  };

  // const routineIdHandler = (id) => {
  //   // setRoutineId(id)
  //   getWorkout(userId, routineId)
  // }

  return (
    <>
      <RoutineList>
        <RoutineItem
          // onClick={(e)=>routineIdHandler(e.target.id)}
          // onClick={(e) => {toggle(e)}}
          onClick={() => router.push(`/workout/${userId}`)}
          id={routine.id}
        >
          <ItemContainer
            id={routine.id}
            // onClick={(e)=>routineIdHandler(e.target.id)}
          >
            <RoutineTitle>{routine.name}</RoutineTitle>
            <RoutineTime>{routine.finished_time}분</RoutineTime>
          </ItemContainer>
        </RoutineItem>
        <ButtonContainer>
          <DeleteButton
            id={routine.id}
            onClick={(e) => deleteRoutine(e.target.id)}
          >
            삭제
          </DeleteButton>
        </ButtonContainer>
      </RoutineList>
    </>
  );
}
