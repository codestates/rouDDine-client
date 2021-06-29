import React, {useState, Component} from 'react'
import styled from 'styled-components'
import HeadInfo from '../components/HeadInfo'
import Nav from '../components/Nav'
import data, { exercises } from '../data/data'
import {resetServerContext, DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import WorkoutLists from '../components/WorkoutLists'

// const getItems = count =>
//   Array.from({ length: count }, (v, k) => k).map(k => ({
//     id: `item-${k}`,
//     content: `item ${k}`
//   }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

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

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: data.exercises,
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items
    });
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <WorkoutContainer>
        <HeadInfo/>
        <Nav/>
        <PageTitle>Workout page</PageTitle>
        <SubTitle>루틴 이름</SubTitle>
        <WorkoutListContainer>
          <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              >
                {this.state.items.map((item, index) => (
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
}
