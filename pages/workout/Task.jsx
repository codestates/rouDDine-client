import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import axios from 'axios';
import {useRouter} from 'next/router'
import { useSelector, useDispatch } from 'react-redux';
import { getCurWorkout } from "../../redux/reducers/id_reducer";

const Container = styled.div`
  border: 1px solid lightgray;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${(props) => (props.isDraggin ? "green" : "#f3f5f7")};
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
    dispatch(getCurWorkout(workoutId))
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
        isDraggin={snapshot.isDragging}
        id={task.id}
        >
        <button onClick={getWorkoutId}>삭제</button>
        <button onClick={getWorkoutId2}>수정</button>
        <div>
          <div>{task.name}</div>
          <div>운동 시간{task.set_time}</div>
          <div>쉬는 시간{task.rest_time}</div>
        </div>
      </Container>
    )}
  </Draggable>
  )
}


// class Task extends Component {
//   render() {
//     // console.log(this.props.getWorkout);
//     // console.log(this.props.task.id);
//     const deleteWorkout = async (workoutId) => {
//       const url = `http://localhost:8000/exercise?id=${workoutId}`
//       await axios.delete(url)
//       .then((res) => {
//         this.props.getWorkout()
//         console.log(res);
//       })
//     }

//     const getWorkoutId = (e) => {
//       const workoutId = e.target.parentElement.id;
//       console.log(workoutId);
//       deleteWorkout(workoutId)
//     }

//   // useEffect(() => {

//   // }, [deleteWorkout])


//     return (
//       <Draggable draggableId={this.props.task.id} index={this.props.index}>
//         {(provided, snapshot) => (
//           <Container
//             {...provided.draggableProps}
//             {...provided.dragHandleProps}
//             ref={provided.innerRef}
//             isDraggin={snapshot.isDragging}
//             id={this.props.task.id}
//             >
//             <button onClick={getWorkoutId}>삭제</button>
//             <button onClick={() => router.push(`/workout_update`)}>수정</button>
//             <div>
//               <div>{this.props.task.name}</div>
//               <div>운동 시간{this.props.task.set_time}</div>
//               <div>쉬는 시간{this.props.task.rest_time}</div>
//             </div>
//           </Container>
//         )}
//       </Draggable>
//     );
//   }
// }

// export default Task;
