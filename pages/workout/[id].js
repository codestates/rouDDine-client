import React, { useState, useEffect } from 'react';
import Column from './Column';
import {useRouter} from 'next/router'
import {
  resetServerContext,
  DragDropContext,
  Droppable,
} from 'react-beautiful-dnd';
import styled from 'styled-components';
import Nav from '../../src/components/Nav';
import { useSelector } from 'react-redux';
import initialData from './initData';
import axios from 'axios';
import {
  Container,
  Button,
  Link,
  lightColors,
  darkColors,
} from 'react-floating-action-button';

resetServerContext();

const WorkoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 8px auto;
`;

function MultiColumn () {
  const userId = useSelector(state => state.id_reducer.userId);
  const routineId = useSelector(state => state.id_reducer.curRoutineId)
  const [workouts, setWorkouts] = useState(initialData[0])
  const router = useRouter()


  const getWorkout = async () => { 
    const url = `http://localhost:8000/routine?userid=${userId}&routine_id=${routineId}`
    await axios.get(url)
    .then(res => {
      console.log(res.data)
      setWorkouts(res.data)
    })
  }
  // console.log(workouts)
  useEffect(() => {
    window && getWorkout()
  }, [userId])

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
  };

  return (
    <>
      <Nav></Nav>
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
                    getWorkout={getWorkout}
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
      <Container>
      {/* <Link 
        href="/add"
        styles={{backgroundColor: darkColors.lightBlue, color: lightColors.white}}
        >
          +
        </Link> */}
        <Button
          onClick={() => router.push(`/add`)}
          tooltip="나만의 운동 만들기!"
          icon="fas fa-plus"
          rotate={true}
          styles={{backgroundColor: darkColors.lightBlue, color: lightColors.white}}
        >
          +</Button>
      </Container>
    </>
  );
}

export default MultiColumn;
