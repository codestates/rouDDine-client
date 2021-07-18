import axios from 'axios';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetServerContext, DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { workoutInfo } from '../../redux/reducers/workoutInfo';
import { routineInfo } from '../../redux/reducers/routineInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import Modal from './ex_update_Modal';

resetServerContext();

function TodayRoutine({ data }) {
  const dispatch = useDispatch();
  const [workouts, setWorkouts] = useState(data.tasks); //@@@@@@@@@@@
  const [editMode, setEditMode] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const routineId = data.id; //루틴아이디

  // 드래그앤드롭으로 순서 바꾸기
  const orderChangeHandler = async (routineId, workouts) => {
    await axios.patch(
      `${process.env.NEXT_PUBLIC_url}/testroutine`,
      {
        routine_id: routineId,
        exercise_array: workouts,
      },
      { withCredentials: true }
    );
  };

  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? 'lightblue' : '#fff9f9',
    display: 'flex',
  });

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
    setWorkouts(reorder(workouts, result.source.index, result.destination.index));
  };

  const workoutUpdateHandler = () => {
    setModalOpen(!modalOpen);
  };

  const triggerEditMode = () => {
    setEditMode(true);
  };

  const endEditMode = async () => {
    await orderChangeHandler(routineId, workouts);
    setEditMode(false);
  };

  const workoutDeleteHandler = (workoutId, routineId) => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_url}/testexercise?workoutid=${workoutId}`, { withCredentials: true })
      .then(() => console.log('workout의 workout삭제 성공'))
      .catch(() => console.log('workout의 workout삭제 실패'));
  };

  return (
    <>
      <DndContainer>
        {editMode ? <RotateButton onClick={endEditMode}>저장</RotateButton> : <RotateButton onClick={triggerEditMode}>운동의 순서를 바꾸어 보세요!</RotateButton>}
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='droppable' direction='vertical'>
            {(provided, snapshot) => (
              <ItemContainer editMode={editMode} ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}>
                {workouts &&
                  workouts.map((item, index) => (
                    <Draggable isDragDisabled={!editMode} key={item.id} draggableId={String(item.id)} index={index}>
                      {(provided, snapshot) => (
                        <div>
                          {modalOpen && <ModalBackground key={index} onClick={() => setModalOpen(false)} />}
                          <Modal key={index} workoutid={item.id} setModalOpen={setModalOpen} modalOpen={modalOpen}></Modal>
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
                              <ButtonContainer id={item.id}>
                                <UpdateButton
                                  onClick={() => {
                                    workoutUpdateHandler(item.id);
                                  }}
                                >
                                  <FontAwesomeIcon icon={faEdit} />
                                </UpdateButton>
                                {/* // 삭제버튼 */}
                                <UpdateButton>
                                  <FontAwesomeIcon
                                    icon={faTrashAlt}
                                    id={item.id}
                                    onClick={(e) => {
                                      workoutDeleteHandler(item.id, routineId);
                                    }}
                                  ></FontAwesomeIcon>
                                </UpdateButton>
                              </ButtonContainer>
                            </div>
                            <InfoContainer>
                              <span>총{item.set_number}세트</span>
                              <span>
                                운동시간: {Math.floor(item.rest_time / 60)}분 {item.rest_time % 60}초
                              </span>
                              <span>
                                세트 간 휴식: {Math.floor(item.rest_time / 60)}분 {item.rest_time % 60}초
                              </span>
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
    </>
  );
}
export default TodayRoutine;

const DndContainer = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  div {
    margin-left: 0;
    text-align: center;
  }
  @media (max-width: 1280px) {
    overflow-y: auto;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  width: 450px;
  background-color: ${(props) => (props.isDraggingOver ? 'lightblue' : '#4665d9')};
  background-color: ${(props) => (props.editMode ? '#000' : 'white')};
  border: ${(props) => (props.editMode ? '1px solid #000' : 'none')};
  opacity: ${(props) => (props.editMode ? '0.55' : '1')};

  @media (max-width: 1280px) {
    max-width: 360px;
    min-width: 280px;
  }
`;

const Item = styled.ul`
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
  margin: 5px 5px;
  font-family: Stylish-Regular;
  background: #fff8fd;
  color: #000036;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.22);
  -webkit-backdrop-filter: blur(50px);
  backdrop-filter: blur(50px);

  :hover {
    color: lightgrey;
    background: ${(props) => (props.isDragging ? '#2ac1bc' : '#000035;')};
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.8);
    -webkit-backdrop-filter: blur(22px);
    backdrop-filter: blur(22px);
  }

  div {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  span {
    text-align: left;
  }
`;

const InfoContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;
  margin: 8px;
`;

const ItemName = styled.h2`
  list-style: none;
  text-align: left;
  flex: 4 0 auto;
`;

const ItemMemo = styled.li`
  list-style: none;
`;

const UpdateButton = styled.span`
  /* margin-right: 10px; */
  box-sizing: border-box;
  max-height: 18px;
  cursor: pointer;
  font-family: NanumGothic-Bold;
  margin: 3px;
  /* font-weight: 800; */
`;

const RotateButton = styled.div`
  background-color: #000035;
  opacity: 0.9;
  color: lightgrey;
  font-size: 1rem;
  padding: 10px;
  /* border: 2px outset lightgreen; */
  border-radius: 10px;
  height: 40px;
  width: 80%;

  :hover {
    /* border: 5px outset #2ac1bc; */
    box-shadow: 3px 5px;
    background-color: #000035;
    opacity: 0.7;
    border: #000035 2px;
    font-weight: 600;
    color: white;
  }
`;
const ModalBackground = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 100;
`;
