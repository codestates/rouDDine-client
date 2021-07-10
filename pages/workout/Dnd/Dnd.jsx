import React, { useState, useEffect } from 'react';
import {
  resetServerContext,
  DragDropContext,
  Droppable,
} from 'react-beautiful-dnd';
import styled from 'styled-components';
import initData from './initData';
import Column from './Column';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux'
import { workoutDnd } from '../../../redux/reducers/workout';
import {currentWorkout} from '../../../redux/reducers/workout'

resetServerContext();


const WorkoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default function Dnd({curWorkouts}) {
  const [workouts, setWorkouts] = useState(curWorkouts)
  console.log(workouts)
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('디앤디페이지@@@@@@@@@')
    dispatch(currentWorkout(workouts))
  }, [])

  // 여기부터 드래그앤 드롭
  const onDragEnd = (result) => {
    document.body.style.color = "inherit";
    document.body.style.backgroundColor = "inherit";
    console.log(result)
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      console.log('onDragEnd no destination');
      return;
    }  
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      console.log('onDragEnd not move');
      return;
    }  

    const start = workouts.columns[source.droppableId];
    const finish = workouts.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };  

      const newState = {
        ...workouts,
        columns: {
          ...workouts.columns,
          [newColumn.id]: newColumn,
        },  
      }; 
      setWorkouts(newState)
      // dispatch(workoutDnd(newState))
      return;
    }  
    //move to different column
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = { ...start, taskIds: startTaskIds };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = { ...finish, taskIds: finishTaskIds };

    const newState = {
      ...workouts,
      columns: {
        ...workouts.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },  
    };  
    setWorkouts(newState)
    // dispatch(workoutDnd(newState))
  };  

  return (
    <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId='all-columns'
          direction='horizontal'
          type='column'
        >
          {(provided, snapshot) => (
            <WorkoutContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {workouts.columnOrder.map((columnId, index) => {
                const column = workouts.columns[columnId];
                const tasks = column.taskIds.map(
                  taskId => workouts.tasks[taskId]
                  );
                  //
                  return (
                    <Column
                    // getWorkout={getWorkout}
                    key={column.id}
                    column={column}
                    tasks={tasks}
                    index={index}
                  />
                );
              })}
              {provided.placeholder}
            </WorkoutContainer>
          )}
        </Droppable>
      </DragDropContext>
  )
}


// export const getServerSideProps = async (context) => {
//   const url = `http://localhost:8000/routine?userid=1&routine_id=1`
//   const res = await axios.get(url)
//   console.log(context.store)
//   // context.store.dispatch(currentWorkout(res.data.data))
//   return {
//     props : {
//       data: res.data,
//     }
//   }
//   }
