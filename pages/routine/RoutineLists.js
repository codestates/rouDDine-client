import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import icon from '../../public/icon.jpg';
import axios from 'axios';
import router from 'next/router';
import { Button, Icon } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import Workout from '../workout/[id]';
import { currentWorkout } from '../../redux/reducers/workout';

const RoutineList = styled.li`
  margin: 4px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  cursor: pointer;
  background-color: #dbe4e4;

  div {
    font-size: 1.3rem;
    text-align: center;
    vertical-align: middle;
  }

  :hover {
    background-color: pink;
  }
`;

const RoutineItem = styled.div`
  padding: 0 5px;
  flex: 1 0 auto;
  /* border: 2px solid black; */
  list-style: none;
  margin: 5px;
  border-radius: 15px;
  font-size: 1rem;
  vertical-align: middle;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1 0 auto;
`;

const RoutineTitle = styled.h3``;

const RoutineTime = styled.h4`
  text-align: center;
  vertical-align: middle;
  padding: 50px 0;
`;

const DeleteButton = styled.button`
  position: absolute;
  /* right: 8px */
`;

export default function RoutineLists({ routineId, routine, routines, getRoutine, userId }) {
  const dispatch = useDispatch();
  const deleteHandler = (e) => {
    deleteRoutine(e.target.parentElement.id);
  };
  const deleteRoutine = async (id) => {
    const url = `http://localhost:3000/routine?routine_id=${id}`;
    await axios.delete(url).then((res) => {
      console.log(`${userId}의 루틴을 삭제했습니다`);
      console.log(res);
      getRoutine(userId, routineId);
    });
  };

  const getMyRoutine = async (e) => {
    const id = e.target.id;
    const url = `http://localhost:3000/routine?routine_id=${id}`;
    const res = await axios.get(url, { withCredentials: true });
    console.log(res.data.tasks);
    // setTasks(res.data.tasks)
    dispatch(currentWorkout(res.data.tasks));
  };

  return (
    <>
      <RoutineList
        id={routine.id}
        onClick={(e) => {
          getMyRoutine(e);
        }}
      >
        <RoutineItem id={routine.id}>
          <RoutineTitle id={routine.id}>{routine.name}</RoutineTitle>
        </RoutineItem>
        <Button
          id={routine.id}
          onClick={(e) => deleteHandler(e)}
          // onClick={(e) => deleteRoutine(e.target.id)}
          icon={{ as: 'i', className: 'trash' }}
        />
      </RoutineList>
    </>
  );
}
