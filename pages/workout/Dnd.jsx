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


resetServerContext();


const WorkoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 8px auto;
`;


export default function Dnd({curWorkouts}) {
  console.log(curWorkouts)
  const [workouts, setWorkouts] = useState(initData[0])
  const [routineId, setRoutineId] = useState(null)
  const [routineUserId, setRoutineUserId] = useState(null)
  const [exArr, setExArr] = useState([])

  // 여기부터 드래그앤 드롭
  const onDragEnd = result => {
    document.body.style.color = "inherit";
    document.body.style.backgroundColor = "inherit";
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

    if (type === 'column') {
      const newColumnOrder = Array.from(workouts.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...workouts,
        columnOrder: newColumnOrder,
      };  
      setWorkouts(newState);
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
      setWorkouts(newState);
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
    
    setWorkouts(newState);
    setExArr(newState.columns['column-2'].taskIds)
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


// export async function getStaticProps() {
//   const routineInfo = JSON.parse(localStorage.getItem('routineInfo'))
//   const routineId = routineInfo.id
//   const routineUserId = routineInfo.userid
//   const url = `http://localhost:8000/routine?userid=${routineUserId}&routine_id=${routineId}`
//   const res = await axios.get(url)
//   const data = res.data

//   return {
//     props: {
//       curWorkouts : data,
//     },
//   };
// }