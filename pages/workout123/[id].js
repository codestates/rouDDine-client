import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import HeadInfo from '../../components/HeadInfo'
import Nav from '../../components/Nav'
import {resetServerContext, DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import WorkoutLists from '../../components/WorkoutLists'
import axios from 'axios'
import { useSelector } from 'react-redux';

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
  margin: 8px auto;
  border: 1px solid lightgrey;
  background-color: white;
  border-radius: 2px;
  width: 350px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;


export default function Workout() {
  const userId = useSelector(state => state.login.userId);
  const [workouts, setWorkouts] = useState(null)
  // console.log(userId)
  const getWorkout = async () => {
    const url = `http://localhost:8000/exercise?userid=${userId}`
    await axios.get(url)
    .then((res) => {
      setWorkouts(res.data.result)
    })
  }

    useEffect(() => {
      getWorkout()
    }, [userId])
    console.log(workouts)

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
              {workouts && workouts.map((workout, index) => (
                <Draggable key={workout.id} draggableId={workout.id.toString()} index={index}>
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
                      <WorkoutLists workout={workout}></WorkoutLists>
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

