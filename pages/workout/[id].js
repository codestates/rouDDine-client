import React, { useState, useEffect } from 'react';
import Column from './Column';
import {useRouter} from 'next/router'
import {
  resetServerContext,
  DragDropContext,
  Droppable,
} from 'react-beautiful-dnd';
import styled from 'styled-components';
import Nav from '../../src/components/Nav';
import initialData from './initData';
import axios from 'axios';
// import {
//   Container,
//   Button,
//   Link,
//   lightColors,
//   darkColors,
// } from 'react-floating-action-button';
import useLocalStorage from '../../util/useLocalStorage';


resetServerContext();

const WorkoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 8px auto;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
const RoutineTitle = styled.div`
  font-size: 2rem;
  text-align: center;
`;
const InputTitle = styled.input`

`;
const TitleButton = styled.button`
  
`;
const SaveButton = styled.button`
  
`;

function MultiColumn () {
  useEffect(() => {
    const routineInfo = JSON.parse(localStorage.getItem('routineInfo'))
    setRoutineId(routineInfo.id)
    setRoutineUserId(routineInfo.userid)
  }, [])  
  
  const [workouts, setWorkouts] = useState(initialData[0])
  const [isClick, setIsClick] = useState(false)
  const [exArr, setExArr] = useState([])
  const router = useRouter()
  const [routineId, setRoutineId] = useState(null)
  const [routineUserId, setRoutineUserId] = useState(null)
  const [title, setTitle] = useState(null)
  console.log(routineId)
  console.log(routineUserId)
  
  useEffect(() => {
    getWorkout()
  }, [routineId])  

  useEffect(() => {
    updateWorkout()
  }, [exArr])
  console.log(exArr)
  
  
  
  const titleHandler = () => {
    if (!isClick) {
      setIsClick(true)
    } else {
      setIsClick(false)
    }  
  };  
  
  const onChange = (e) => {
    const { value } = e.target;
    setTitle(value);
    console.log(value)
  };  

  const saveHandler = () => {
    updateWorkout();
    titleHandler();
  };  

  const updateWorkout = async () => {
    const url = `http://localhost:8000/routine`
    const body = {
      routine_id: routineId,
      routine_name: title,
      exercise_array: exArr
    }  
    console.log(exArr)
    await axios.patch(url, body)
    .then((res) => {
      console.log(res)
    })  
  }  
  

  const getWorkout = async () => { 
    const url = `http://localhost:8000/routine?userid=${routineUserId}&routine_id=${routineId}`
    await axios.get(url)
    .then(res => {
      setWorkouts(res.data)
    })  
  }  
  // console.log(workouts)
  
  // 여기부터 드래그앤 드롭
  const onDragEnd = result => {
    document.body.style.color = "inherit";
    document.body.style.backgroundColor = "inherit";
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      console.log('onDragEnd no destination');
      return;
    }  
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      console.log('onDragEnd not move');
      return;
    }  

    if (type === 'column') {
      const newColumnOrder = Array.from(workouts.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...workouts,
        columnOrder: newColumnOrder,
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
        taskIds: newTaskIds,
      };  

      const newState = {
        ...workouts,
        columns: {
          ...workouts.columns,
          [newColumn.id]: newColumn,
        },  
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
        [newFinish.id]: newFinish,
      },  
    };  
    
    setWorkouts(newState);
    setExArr(newState.columns['column-2'].taskIds)
  };  
  return (
    <>
      <Nav></Nav>
        {isClick? 
        <TitleContainer>
          <RoutineTitle>{title}</RoutineTitle>
          <TitleButton onClick={titleHandler}>제목 수정</TitleButton>
        </TitleContainer>
        :
        <TitleContainer>
          <InputTitle placeholder="변경할 이름을 입력하세요" onChange={onChange}></InputTitle>
          <SaveButton onClick={saveHandler}>저장</SaveButton>
        </TitleContainer>
      }
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId='all-columns'
          direction='horizontal'
          type='column'
        >
          {(provided, snapshot) => (
            <WorkoutContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {workouts.columnOrder.map((columnId, index) => {
                const column = workouts.columns[columnId];
                const tasks = column.taskIds.map(
                  taskId => workouts.tasks[taskId]
                  );
                  //
                  return (
                    <Column
                    getWorkout={getWorkout}
                    key={column.id}
                    column={column}
                    tasks={tasks}
                    index={index}
                  />
                );
              })}
              {provided.placeholder}
            </WorkoutContainer>
          )}
        </Droppable>
      </DragDropContext>
      {/* <Container> */}
      {/* <Link 
        href="/add"
        styles={{backgroundColor: darkColors.lightBlue, color: lightColors.white}}
        >
          +
        </Link> */}
        {/* <Button
          onClick={() => router.push(`/add`)}
          tooltip="나만의 운동 만들기!"
          icon="fas fa-plus"
          rotate={true}
          styles={{backgroundColor: darkColors.lightBlue, color: lightColors.white}}
        >
          +</Button>
      </Container> */}
    </>
  );
}

export default MultiColumn;
