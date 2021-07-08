import styled from 'styled-components';
import RoutineLists from './RoutineLists';
import HeadInfo from '../../src/components/HeadInfo';
import Nav from '../../src/components/Nav';
import axios from 'axios';
import { useState, useEffect } from 'react';
import useLocalStorage from '../../util/useLocalStorage';
import Workout from './workout/[id]'
import initData from './workout/Dnd/initData'

const RoutineContainer = styled.ul`
  margin: 10px;
  padding: 0 20%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  button {
    font-size: 1em;
  }
`;

const AddButton = styled.button`
`;

const PageTitle = styled.h1`
  text-align: center;
  margin: 40px;
`;

const SubTitle = styled.h3`
  text-align: center;
`;


export default function Routine() {
  const [routines, setRoutines] = useState(null);
  const [info, setInfo] = useLocalStorage('info', null);
  const [isOpen, setIsOpen] =useState(false);
  const [routineId, setRoutineId] = useState(null);
  const [workouts, setWorkouts] = useState(initData[0]);
  const [title, setTitle] = useState(null);
  const userId = info.id

  console.log(info);
  console.log(title);
  console.log(routines);
  console.log(workouts);
  console.log(routineId);

  const toggle = (e) => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo')
    setInfo(JSON.parse(userInfo))
    getRoutine(userId)
  },[])

  const getRoutine = async(userId) => { 
    const url = `http://localhost:8000/routine?userid=${userId}`
    await axios.get(url)
    .then(res => {
      setRoutines(res.data.result)
    })
  }

  const getWorkout = async(userId, routineId) => {
    const url = `http://localhost:8000/routine?userid=${userId}&routine_id=${routineId}`
    console.log(url);
    await axios.get(url)
    .then((res) => {
      setWorkouts(res.data);
      console.log(res.data);
    })
  }

  const addRoutine = async () => {
    const url = `http://localhost:8000/routine`;
    const body = {
      userid : info.id,
      routine_name : "새 루틴",
      share : "false",
    }
    await axios.post(url, body)
    .then(res => {
        console.log(res)
        console.log(`유저${info.name}의 루틴을 생성했습니다.`)
        getRoutine(userId, routineId)
      })
    }

  return (
    <>
      <HeadInfo />
      <Nav />
      <Workout 
        title={title}
        setTitle={setTitle}
        routineId={routineId}
        userId={userId}
        toggle={toggle} 
        setWorkouts={setWorkouts}
        getWorkout={getWorkout}
        workouts={workouts}
        isOpen={isOpen}
        routines={routines}
        />
      <PageTitle>Routine page</PageTitle>
      <SubTitle>오늘 걷지 않으면 내일은 뛰어야 된다</SubTitle>
      <RoutineContainer>
        <AddButton onClick={addRoutine}>루틴추가</AddButton>
        {routines &&
          routines.map((routine) => (
            <RoutineLists
            workouts={workouts}
            title={title}
            setTitle={setTitle}
            isOpen={isOpen}
            toggle={toggle}
            userId={userId}
            key={routine.id}
            routines={routines}
            routine={routine}
            routineId={routine.id}
            getWorkout={getWorkout}
            getRoutine={getRoutine}
            setRoutineId={setRoutineId}
            />
            ))}
      </RoutineContainer>
    </>
  );
}
