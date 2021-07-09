import React, { Component, use } from 'react';
import styled from 'styled-components';
import Task from './Task';
// import Task from './Task';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  margin: 0 30px;
  border: 1px solid lightgrey;
  background-color: white;
  border-radius: 10px;
  display: flex;
  max-height: 650px;
  width: 500px;
  flex-direction: column;
`;

const Title = styled.h3`
  text-align: center;
  padding: 20px;
  /* background-color: gray; */
`;

const TaskList = styled.div`
  transition: background-color 0.2s ease;
  background-color: ${(props) =>
    props.isDraggingOver ? 'skyblue' : 'inherit'};
  flex-grow: 1;
  border-radius: 20px;
  width: 500px;
  max-height: 650px;
  overflow-y: scroll;
`;

export default function Column({
  column,
  index,
  tasks,
  getWorkout,
  routineId,
  userId,
}) {
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id} type='task'>
        {(provided, snapshot) => (
          <TaskList
            id={column.id}
            {...provided.droppableProps}
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map((task, index) => (
              <Task
                getWorkout={getWorkout}
                id={column.id}
                routineId={routineId}
                userId={userId}
                key={task.id}
                task={task}
                index={index}
              />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
}
