import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { resetServerContext, DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import cookies from 'next-cookies';
import { useSelector } from 'react-redux';

resetServerContext();

const grid = 8;
const DndContainer = styled.div`
  display: block;
`;

const ItemContainer = styled.div`
  display: flex;
  min-width: 500px;
  padding: ${grid};
  overflow: scroll;
  flex-direction: column;
  border-radius: 6px;
  /* position: absolute; */
  width: 30%;
  background-color: ${(props) => (props.isDraggingOver ? 'lightblue' : 'lightgray')};
  background-color: ${(props) => (props.editMode ? '#000' : 'white')};
  border: ${(props) => (props.editMode ? '1px solid #000' : 'none')};
  opacity: ${(props) => (props.editMode ? '0.25' : '1')};
`;

const Item = styled.ul`
  border-radius: 5px;
  display: block;
  text-align: center;
  user-select: none;
  padding: 16px;
  margin: 5px 5px;
  background: ${(props) => (props.isDragging ? 'lightgreen' : '#2ac1bc')};
`;

const ItemName = styled.h2`
  list-style: none;
`;

const ItemMemo = styled.li`
  list-style: none;
`;

function TodayRoutine() {
  const getWorkouts = async () => {
    const url = `http://localhost:3000/exercise`;
    const res = await axios.get(url, {
      withCredentials: true,
    });
    const data = res.data;
    console.log(data.result);
    setItems(data.result);
  };

  useEffect(() => {
    getWorkouts();
  }, []);

  const grid = 8;

  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? 'lightblue' : 'lightgray',
    display: 'flex',
    overflow: 'scroll',
  });

  const [items, setItems] = useState([]);
  const [editMode, setEditMode] = useState(false);
  console.log(items);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorder = (list, startIndex, endIndex) => {
      const result = Array.from(list);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);

      return result;
    };

    setItems(reorder(items, result.source.index, result.destination.index));
  };

  const triggerEditMode = () => {
    setEditMode(true);
    console.log('editMode: ', editMode);
  };

  const endEditMode = () => {
    setEditMode(false);
    console.log('editMode: ', editMode);
  };

  return (
    <>
      <DndContainer>
        {editMode ? <button onClick={endEditMode}>저장</button> : <button onClick={triggerEditMode}>순서변경</button>}
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='droppable' direction='vertical'>
            {(provided, snapshot) => (
              <ItemContainer editMode={editMode} ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}>
                {items.map((item, index) => (
                  <Draggable isDragDisabled={!editMode} key={item.id} draggableId={String(item.id)} index={index}>
                    {(provided, snapshot) => (
                      <>
                        <Item ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} isDragging={snapshot.isDragging} draggableStyle={provided.draggableStyle}>
                          <ItemName>{item.name}</ItemName>
                          <ItemMemo>{item.memo}</ItemMemo>
                        </Item>
                      </>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ItemContainer>
            )}
          </Droppable>
        </DragDropContext>
      </DndContainer>
    </>
  );
}

export default TodayRoutine;
