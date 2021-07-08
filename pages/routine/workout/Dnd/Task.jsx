import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import axios from 'axios';
import {useRouter} from 'next/router'
import { useSelector, useDispatch } from 'react-redux';
// import { getCurWorkout } from "../../redux/reducers/id_reducer";

const Container = styled.div`
  border: 1px solid lightgray;
  border-radius: 20px;
  margin: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  background-color: ${(props) => (props.isDragging ? "green" : "#f3f5f7")};
`;


const WorkoutContainer = styled.div`
  
`;

const WorkoutInfoContainer = styled.div`

`;

const WorkoutInfo = styled.div`

`;
const WorkoutButtonContainer = styled.div`

`;

const WorkoutButton = styled.button`

`;

export default function Task({getWorkout, id, index, task,}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [workouts, setWorkouts] = useState([task]);
  // console.log(workouts);
  const deleteWorkout = async (workoutId) => {
    const url = `http://localhost:8000/exercise?id=${workoutId}`
    await axios.delete(url)
    .then((res) => {
      getWorkout()
      console.log(res);
    })
  }
  
  const getWorkoutId = (e) => {
    const workoutId = e.target.parentElement.id;
    console.log(workoutId);
    deleteWorkout(workoutId)
  }

  const getWorkoutId2 = (e) => {
    const workoutId = e.target.parentElement.id;
    console.log(workoutId);
    // dispatch(getCurWorkout(workoutId))
    router.push(`/workout_update`)
  }

  useEffect(() => {
    // getWorkout()
  }, [])

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
          <WorkoutInfoContainer>
            <WorkoutInfo>{task.name}</WorkoutInfo>
            <WorkoutInfo>운동 시간{task.set_time}</WorkoutInfo>
            <WorkoutInfo>쉬는 시간{task.rest_time}</WorkoutInfo>
          </WorkoutInfoContainer>
          <WorkoutButtonContainer>
            <WorkoutButton onClick={getWorkoutId}>삭제</WorkoutButton>
            <WorkoutButton onClick={getWorkoutId2}>수정</WorkoutButton>
          </WorkoutButtonContainer>
        </WorkoutContainer>
      </Container>
    )}
  </Draggable>
  )
}
