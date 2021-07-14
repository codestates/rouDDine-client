import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { resetServerContext, DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ReactDOM from "react-dom";
import styled from 'styled-components'
import Modal from '../../../src/components/ex_update_Modal'
import {useDispatch, useSelector} from 'react-redux'
import {workoutInfo} from '../../../redux/reducers/routineInfo'
import {ModalOpenAction} from '../../../redux/reducers/modal'
import {deleteWorkout} from '../../../redux/reducers/workout'
import {dndUpdate} from '../../../redux/reducers/workout'
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
  background: ${(props) => (props.isDragging ? 'lightgreen' : '#2ac1bc')};
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
  const [workouts, setWorkouts] = useState(null)
  // const routineId = useSelector((state) => state.routineInfo.id)
  console.log(workouts);

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
    dispatch(dndUpdate(res.data.tasks))
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

const workoutClickHandler = (e) =>{
  console.log(e);
  // console.log(e.target.innerText);
  dispatch(ModalOpenAction())
  if(isOpen) {
    dispatch(workoutInfo(e.target.id, e.target.innerText))
  }
}

const triggerEditMode = () => {
  setEditMode(true);
  // console.log("editMode: ",editMode);
};

const endEditMode = () => {
  setEditMode(false);
  orderChangeHandler(routineId, workouts)
  // console.log("editMode: ", editMode);
};

const deleteWorkoutHandler = async (e) => {
  const targetId = e.target.parentElement.id
  console.log(targetId);
  targetId && setWorkouts(workouts.filter((workout) => (workout.id !== targetId)));
  targetId && dispatch(deleteWorkout(targetId))
}

const updateWorkout = async (routineId) =>{
  const url = `http://localhost:3000/testexercise`
  const res = await axios.patch(url, {withCredentials: true})
  console.log(res);
} 
const routineId = useSelector((state) => state.routineInfo.id)
// const workoutIds = workouts && workouts.map((workout) => (workout.workout.id))
const currentWorkouts = useSelector((state) => state.routineInfo.tasks)
console.log(currentWorkouts)


useEffect(() => {
  setWorkouts(currentWorkouts)
}, [currentWorkouts])
// console.log(workouts)
// console.log(workoutIds);
// console.log(routineId);

const routineUpdateHandler = async() => {
  const url = `http://localhost:3000/testroutine`
  const body = {
    routine_id : routineId,
    exercise_array : [...workoutIds]
  }
  const res = await axios.patch(url, body)
  console.log(res);
}

  return (
    <>
      <DndContainer>
    {editMode ? <div onClick={endEditMode}>저장</div> : (
      <div onClick={triggerEditMode}>순서변경</div>
    )}
    <span onClick={()=>{routineUpdateHandler()}}>운동 저장</span>
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
                    <span onClick={(e)=> {deleteWorkoutHandler(e)}}>삭제</span>
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
