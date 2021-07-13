import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { resetServerContext, DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ReactDOM from "react-dom";
import styled from 'styled-components'
import cookies from 'next-cookies';
import Modal from '../../../src/components/ex_update_Modal'
import {useDispatch, useSelector} from 'react-redux'
import {workoutInfo} from '../../../redux/reducers/workoutInfo'
import {ModalOpenAction} from '../../../redux/reducers/modal'
resetServerContext();

const grid = 8;

const DndContainer = styled.div`
  display: block;
  width: 10vw;
`;

const ItemContainer = styled.div`
  display: flex;
  min-width: 300px;
  margin-left: 20px;
  padding: ${grid};
  flex-direction: column;
  border-radius: 6px;
  background-color: ${(props) => (props.isDraggingOver ? 'lightblue' : 'lightgray')};
  background-color: ${(props) => (props.editMode ? '#000' : 'white')};
  border: ${(props) => (props.editMode ? '1px solid #000' : 'none')};
  opacity: ${(props) => (props.editMode ? '0.25' : '1')};
`;


const Item = styled.ul`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
  padding: 4px;
  margin: 5px 5px;
  background: ${(props)=> (props.isDragging ? 'lightgreen' : '#2ac1bc')};
`;

const ItemName = styled.h4`
  list-style: none;
  text-align: left;
`;

const ItemMemo = styled.li`
  list-style: none;
`;

const UpdateButton = styled.span`

`;

function TodayRoutine() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal)
  const curItems = useSelector((state) => state.workout)
  const [items, setItems] = useState([
    { id: '1', name: '벤치프레스', set_time: 40, rest_time: 40 },
    { id: '2', name: '덤벨플라이', set_time: 35, rest_time: 40 },
    { id: '3', name: '푸쉬업', set_time: 20, rest_time: 40 },
    { id: '4', name: '레그프레스', set_time: 20, rest_time: 40 },
    { id: '5', name: '스쿼트', set_time: 10, rest_time: 40 },
    { id: '6', name: '데드리프트', set_time: 1, rest_time: 40 },
    { id: '7', name: '사이드레터럴레이즈', set_time: 2, rest_time: 40 },
    { id: '8', name: '풀업', set_time: 15, rest_time: 40 },
    { id: '9', name: '싯업', set_time: 5, rest_time: 40 },
  ])

const grid = 8;

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "#fff9f9",
  display: "flex",
});

  const [editMode, setEditMode] = useState(false)

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
  
  setItems(
    reorder(
        items,
        result.source.index,
        result.destination.index
    )
  )
}

const workoutClickHandler = (e) =>{
  console.log(e);
  // console.log(e.target.innerText);
  dispatch(ModalOpenAction())
  if(isOpen) {
    dispatch(workoutInfo(e.target.id, e.target.innerText))
  }
}

// modalOpen()
// const modalOpen = ()=>{
// }

const triggerEditMode = () => {
  setEditMode(true);
  // console.log("editMode: ",editMode);
};

const endEditMode = () => {
  setEditMode(false);
  // console.log("editMode: ", editMode);
};

  return (
    <>
      <DndContainer>
    {editMode ? <div onClick={endEditMode}>저장</div> : (
      <div onClick={triggerEditMode}>순서변경</div>
    )}
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" direction="vertical">
        {(provided, snapshot) => (
          <ItemContainer
            editMode={editMode}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {items && items.map((item, index) => (
              <Draggable
                isDragDisabled={!editMode}
                key={item.id}
                draggableId={String(item.id)}
                index={index}
              >
                {(provided, snapshot) => (
                  <>
                  <Item
                    onClick={(e)=>{workoutClickHandler(e)}}
                    id={item.id}
                    index={index}
                    name={item.name}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}
                    draggableStyle={provided.draggableStyle}
                  >
                    <ItemName>{item.name}</ItemName>
                    <ItemMemo>{item.memo}</ItemMemo>
                    <UpdateButton></UpdateButton>
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
        <Modal isOpen={isOpen} ></Modal>
  </>
  )
}

export default TodayRoutine;


