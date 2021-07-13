import React, { useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Button, Icon } from 'semantic-ui-react'
import {useDispatch, useSelector} from 'react-redux';
import {currentWorkout} from '../../redux/reducers/workout'

const RoutineList = styled.li`
  margin: 4px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  cursor: pointer;
  background-color:#dbe4e4;
  list-style: none;

  :hover {
    background-color: #2ac1bc;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  flex: row;
`;

const RoutineItem = styled.div`
  padding: 0 5px;
  list-style: none;
  margin: 5px;
  border-radius: 15px;
  font-size: 1rem;
  vertical-align: middle;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const RoutineTitle = styled.h3`
`;

export default function RoutineLists({
  routineId,
  routine,
  getRoutine,
  userId,
}) {
  const dispatch = useDispatch();

  const deleteHandler = (e) => {
    const routineId = e.target.parentElement.id
    console.log(routineId);
    deleteRoutine(routineId)
  }
  const deleteRoutine = async (id) => {
    const url = `http://localhost:3000/routine?routine_id=${id}`;
    const res = await axios.delete(url)
      console.log(`${userId}의 루틴을 삭제했습니다`);
      console.log(res);
      getRoutine(userId, routineId);
  };
  
  // const getMyRoutine = async(e) => {
  //   const id = e.target.id
  //   const url = `http://localhost:3000/routine?routine_id=${id}`
  //   const res = await axios.get(url, { withCredentials: true });
  //   console.log(res.data.tasks);
  //   dispatch(currentWorkout(res.data.tasks))
  // }

  
  return (
    <>
      <RoutineList id={routine.id}
      // onClick={(e) => {getMyRoutine(e)}}
      >
        <ItemContainer>
          <RoutineItem id={routine.id}>
              <RoutineTitle id={routine.id}>{routine.name}</RoutineTitle>
          </RoutineItem>
          <Button
            id={routine.id}
            onClick={(e) => deleteHandler(e)}
            icon={{ as: 'i', className: 'trash' }}
            />
        </ItemContainer>
      </RoutineList>
    </>
  );
}
