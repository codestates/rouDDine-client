import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import axios from 'axios';
import {useRouter} from 'next/router'
import { useSelector, useDispatch } from 'react-redux';
import {currentWorkout} from '../../../redux/reducers/workout'

// import { getCurWorkout } from "../../redux/reducers/id_reducer";

const Container = styled.div`
  border: 1px solid lightgray;
  border-radius: 20px;
  margin: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.isDragging ? "green" : "#f3f5f7")};
`;


const WorkoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

`;

const WorkoutTitle = styled.h2`
  color: ${(props) => (props.isDelete ? "red": "black")};
`;

const WorkoutInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const WorkoutInfo = styled.div`
  /* margin: 20px; */
`;
const WorkoutButtonContainer = styled.div`
    display: flex;
  flex-direction: column;
  justify-content: center;
`;

const WorkoutButton = styled.button`


`;

export default function Task({index, task,}) {
  const router = useRouter();
  const workouts = useSelector(state=>state.workout.data)
  const dispatch = useDispatch();
  // console.log(workouts)
  const deleteWorkout = async (workoutId) => {
    const url = `http://localhost:8000/exercise?id=${workoutId}`
    const res = await axios.delete(url)
      console.log(res);
      dispatch(currentWorkout(workouts))
      // window.location.reload
    }
  
  const getWorkoutId = (e) => {
    const workoutId = e.target.parentElement.parentElement.parentElement.id;
    deleteWorkout(workoutId)
  }

  const getWorkoutId2 = (e) => {
    const workoutId = e.target.parentElement.id;
    console.log(workoutId);
    router.push(`/workout_update`)
  }

  return (
    <Draggable draggableId={task.id} index={index}>
    {(provided, snapshot) => (
      <Container
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        isDragging={snapshot.isDragging}
        id={task.id}
        >
        <WorkoutContainer>
          <WorkoutTitle
          >{task.name}</WorkoutTitle>
          <WorkoutInfoContainer>
            <WorkoutInfo>운동{task.set_time}</WorkoutInfo>
            <WorkoutInfo>휴식{task.rest_time}</WorkoutInfo>
          </WorkoutInfoContainer>
          <WorkoutButtonContainer>
            <WorkoutButton 
            onClick={(e)=> getWorkoutId(e)}
            >
              삭제            
            </WorkoutButton>
            <WorkoutButton onClick={(e)=>getWorkoutId2(e)}>수정</WorkoutButton>
          </WorkoutButtonContainer>
        </WorkoutContainer>
      </Container>
    )}
  </Draggable>
  )
}
