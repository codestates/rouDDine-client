import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { resetServerContext, DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components'
import Modal from '../../../src/components/ex_update_Modal'
import {useDispatch, useSelector} from 'react-redux'
import {workoutInfo} from '../../../redux/reducers/workoutInfo'
import {ModalOpenAction} from '../../../redux/reducers/modal'
import {deleteWorkout} from '../../../redux/reducers/workout'
import {dndUpdate} from '../../../redux/reducers/workout'
import {routineInfo} from '../../../redux/reducers/routineInfo'
import WorkoutItem from '../../../src/components/WorkoutItem.js'
resetServerContext();

const grid = 8;

const DndContainer = styled.div`
  margin-top: 5vh;
  display: block;
  width: 20vw;
  height: 80vh;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  margin-left: 20px;
  padding: ${grid};
  border-radius: 6px;
  background-color: ${(props) => (props.isDraggingOver ? 'lightblue' : '#4665d9')};
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
  /* padding: 30px; */
  margin: 5px 5px;
  font-family: Stylish-Regular;
  color: white;
  background: ${(props) => (props.isDragging ? '#000036' : '#4665d9;')};
  
  :hover{
    background: #ffffff;
    color: #000036;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    -webkit-backdrop-filter: blur( 12.0px );
    /* border: 2px solid #000036; */  
  }

  div {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
`;

const InfoContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  width: 100%;
  padding-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;
`;

const ItemName = styled.h2`
  list-style: none;
  text-align: left;
  flex : 4 0 auto;
`;

const ItemMemo = styled.li`
  list-style: none;
`;

const UpdateButton = styled.span`
  margin: 10px 0;
  padding: 0 10px;
  cursor: pointer;
`;

function TodayRoutine() {
  const dispatch = useDispatch();
  const routineId = useSelector((state) => state.routineInfo.id)
  const currentWorkouts = useSelector((state) => state.routineInfo.tasks)
  const isOpen = useSelector((state) => state.modal)
  const [workouts, setWorkouts] = useState(null)
  // const routineId = useSelector((state) => state.routineInfo.id)
  console.log(workouts);


  //드래그앤드롭으로 순서 바꾸기
  const orderChangeHandler = async(routineId, workouts) => {
    const url = `http://localhost:3000/testroutine`
    const body = {
      routine_id :routineId,
      exercise_array: workouts
    }
    const res = await axios.patch(url, body, {withCredentials: true})
    console.log(res.data.exercise);
    getMyRoutine(routineId)
  }
  const getMyRoutine = async(routineId) => {
    const url = `http://localhost:3000/testroutine?routine_id=${routineId}`
    const res = await axios.get(url, { withCredentials: true });
    console.log(res.data);
    dispatch(routineInfo(res.data.id, res.data.name, res.data.tasks))
    // dispatch(dndUpdate(res.data.tasks))
  }

  useEffect(() => {
    setWorkouts(currentWorkouts)
  }, [])

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
      console.log(result);
      
      return result;
    };
    // dispatch(dndUpdate(reorder(result))
    setWorkouts(reorder(workouts, result.source.index, result.destination.index));
  };

  const workoutUpdateHandler = (e) =>{
    console.log(e);
    const id = e.target.parentElement.parentElement.id
    console.log(id);
    setModalOpen(!modalOpen)
    dispatch(workoutInfo(id))
    // if(isOpen) {
    // }
  }

  const [modalOpen, setModalOpen] = useState(false);
  console.log(modalOpen);
  const triggerEditMode = () => {
    setEditMode(true);
    // console.log("editMode: ",editMode);
  };

  const endEditMode = () => {
    setEditMode(false);
    orderChangeHandler(routineId, workouts)
    // console.log("editMode: ", editMode);
  };

  const workoutDeleteHandler = async (e, routineId) => {
    // const id = e.target.parentElement.parentElement.id
    const targetId = e.target.parentElement.parentElement.id
    console.log(targetId)
    const url = `http://localhost:3000/testexercise?workoutid=${targetId}`
    const res = await axios.delete(url, {withCredentials: true})

    console.log(res)
    // console.log(routineId);
    getMyRoutine(routineId)
  }

  const updateWorkout = async (routineId) =>{
    const url = `http://localhost:3000/testexercise`
    const res = await axios.patch(url, {withCredentials: true})
    console.log(res);
  } 
  const workoutIds = workouts && workouts.map((workout) => (workout.id))
  // const workoutIds = useSelector((state) => state.routineInfo.tasks.)
  // console.log(currentWorkouts)
  console.log(currentWorkouts);

  // const workoutIds = currentWorkouts.map((curWorkout) => (curWorkout.id))
  // console.log(workoutIds);


  useEffect(() => {
    setWorkouts(currentWorkouts)
  }, [currentWorkouts])
  // console.log(workouts)
  // console.log(workoutIds);
  // console.log(routineId);

// const routineUpdateHandler = async(workoutIds) => {
//   const url = `http://localhost:3000/testroutine`
//   const body = {
//     routine_id : routineId,
//     exercise_array : [...workoutIds]
//   }
//   const res = await axios.patch(url, body)
//   console.log(res);
// }

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
                {workouts && workouts.map((item, index) => (
                  <Draggable
                    isDragDisabled={!editMode}
                    key={item.id}
                    draggableId={String(item.id)}
                    index={index}
                  >
                    {(provided, snapshot) => (
                        <div>
                          <Item
                            id={item.id}
                            index={index}
                            name={item.name}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            isDragging={snapshot.isDragging}
                            draggableStyle={provided.draggableStyle}
                            >
                          <div>
                            <ItemName>{item.name}</ItemName>
                            <ButtonContainer>
                              <UpdateButton 
                                id={item.id} 
                                name={item.name}
                                onClick={(e)=> {workoutUpdateHandler(e)}}
                                >
                                <FontAwesomeIcon icon={faEdit} />
                              </UpdateButton>
                              <UpdateButton
                                id={item.id} 
                                onClick={(e)=> {workoutDeleteHandler(e, routineId)}}
                                >
                                <FontAwesomeIcon icon={faTrashAlt} />
                              </UpdateButton>
                            </ButtonContainer>
                          </div>
                          <InfoContainer>
                            <span>총{item.set_number}세트</span>
                            <span>운동시간: {Math.floor(item.rest_time/60)}분 {(item.rest_time % 60)}초</span>
                            <span>세트 간 휴식: {Math.floor(item.rest_time/60)}분 {(item.rest_time % 60)}초</span>
                          </InfoContainer>
                        <ItemMemo>{item.memo}</ItemMemo>
                      </Item>
                    </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ItemContainer>
            )}
          </Droppable>
        </DragDropContext>
      </DndContainer>
    <Modal setModalOpen={setModalOpen} modalOpen={modalOpen} ></Modal>
  </>
  )
}

export default TodayRoutine;
