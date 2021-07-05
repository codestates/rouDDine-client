import React, { useState, useEffect } from "react";
import Column from "./Column";
import { resetServerContext, DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Nav from '../../components/Nav'
import {useSelector} from 'react-redux'
import initialData from "./initData";
import axios from 'axios'


resetServerContext();

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 8px auto;
`;
// console.log(window.location.pathname.split('/'))


// console.log(arrCurrentPath)

function MultiColumn () {
  const userId = useSelector(state => state.login.userId);
  const routineId = useSelector(state => state.routine_id)
  // console.log(currentRoutineId)
  // console.log(routineId)
  // console.log(userId)
  
  const [workouts, setWorkouts] = useState(initialData[0])

  const getWorkout = async () => { 
    const url = `http://localhost:8000/routine?userid=${userId}&routine_id=${currentRoutineId}`
    await axios.get(url)
    .then(res => {
      console.log(res.data)
      setWorkouts(res.data)
    })
  }
  console.log(workouts)

  let arrCurrentPath;
  let currentRoutineId;
  
  useEffect(() => {
    arrCurrentPath = window.location.pathname.split('/')
    currentRoutineId = arrCurrentPath[arrCurrentPath.length-1]
    getWorkout()
  }, [userId])

  const onDragEnd = result => {
    document.body.style.color = "inherit";
    document.body.style.backgroundColor = "inherit";
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      console.log("onDragEnd no destination");
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      console.log("onDragEnd not move");
      return;
    }

    if (type === "column") {
      const newColumnOrder = Array.from(workouts.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...workouts,
        columnOrder: newColumnOrder
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
        taskIds: newTaskIds
      };

      const newState = {
        ...workouts,
        columns: {
          ...workouts.columns,
          [newColumn.id]: newColumn
        }
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
        [newFinish.id]: newFinish
      }
    };

    setWorkouts(newState);
  };


    return (
      <>
        <Nav></Nav>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
          >
          {(provided, snapshot) => (
            <Container {...provided.droppableProps} ref={provided.innerRef}>
              {workouts.columnOrder.map((columnId, index) => {
                const column = workouts.columns[columnId];
                const tasks = column.taskIds.map(
                  taskId => workouts.tasks[taskId]
                  );
                  //
                  return (
                    <Column
                    key={column.id}
                    column={column}
                    tasks={tasks}
                    index={index}
                    />
                    );
                  })}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
          </>
    );
  }

export default MultiColumn;
