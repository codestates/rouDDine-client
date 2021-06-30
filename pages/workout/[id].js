import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import HeadInfo from '../../components/HeadInfo'
import Nav from '../../components/Nav'
import data from '../../data/data'
import {resetServerContext, DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import WorkoutLists from '../../components/WorkoutLists'
import axios from 'axios'
import localStorage from '../../utils/useLocalStorage'



resetServerContext();
const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 350
});

const WorkoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PageTitle = styled.h1`
  text-align: center;
`;

const SubTitle = styled.h3`
  text-align: center;
`;

const WorkoutListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;


export default function Workout() {
  
  const [items, setItems] = localStorage("items", data.exercises)
  const [routines, setRoutines] = localStorage("routines", data.routines)
  const [curWorkout, setCurWorkout] = localStorage("curWorkout", null)

  useEffect(() => {
    const getWorkout = () => {
      const oneWorkout =
      items &&
      items
      .filter((item) => item.routine_id === Number(routines.id))
      .reduce((acc, cur) => {
        Object.assign(acc, cur);
        return acc;
      }, {})
      setCurWorkout(oneWorkout)
      console.log(curWorkout)
    };
    getWorkout();
  }, [items])

  return (
    <WorkoutContainer>
      <HeadInfo/>
      <Nav/>
      <PageTitle>Workout page</PageTitle>
      <SubTitle>루틴 이름</SubTitle>
      <WorkoutListContainer>
        <DragDropContext>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                      )}
                      >
                      <WorkoutLists item={item}></WorkoutLists>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </WorkoutListContainer>
  </WorkoutContainer>
  );
}

