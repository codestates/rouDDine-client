import styled from 'styled-components';
import RoutineLists from './RoutineLists';
import HeadInfo from '../../src/components/HeadInfo';
import Nav from '../../src/components/Nav';
import axios from 'axios';
import { useState, useEffect } from 'react';
// import Workout from './workout/[id]'
// import initData from '../workout/Dnd/initData'
import nookies from 'nookies'
import {currentRoutine} from '../../redux/reducers/routine'
import { useDispatch, useSelector } from 'react-redux'

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
  const routines = useSelector(state => state.routine.result)
  const [isOpen, setIsOpen] =useState(false);
  const [routineId, setRoutineId] = useState(null);
  const [workouts, setWorkouts] = useState(null);
  const [title, setTitle] = useState(null);
  const dispatch = useDispatch();
  // const userid = nookies.get();
  const userId = 1
  console.log(userId)

  const toggle = (e) => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  useEffect(() => {
    getRoutine(userId)
  },[]);

  const getRoutine = async(userId) => { 
    const url = `http://localhost:8000/routine?userid=${userId}`
    const res = await axios.get(url)
    dispatch(currentRoutine(res.data.result))
    // setRoutines(res.data.result)
    console.log(res)
  }

  const addRoutine = async (userId) => {
    const url = `http://localhost:8000/routine`;
    const body = {
      userid : userId,
      routine_name : "새 루틴",
      share : "false",
    }
    const res = await axios.post(url, body)
    console.log(res);
    await getRoutine(userId)
  }

    // useEffect(() => {
    //   getRoutine(userId)
    // }, [routines])

  return (
    <>
      <HeadInfo />
      <Nav />
      {/* <Workout
        getRoutine={getRoutine}
        title={title}
        setTitle={setTitle}
        routineId={routineId}
        userId={userId}
        toggle={toggle} 
        setWorkouts={setWorkouts}
        workouts={workouts}
        isOpen={isOpen}
        routines={routines}
        /> */}
      <PageTitle>Routine page</PageTitle>
      <SubTitle>오늘 걷지 않으면 내일은 뛰어야 된다</SubTitle>
      <RoutineContainer>
        <AddButton onClick={()=>addRoutine(userId)}>루틴추가</AddButton>
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
            getRoutine={getRoutine}
            />
            ))}
      </RoutineContainer>
    </>
  );
}
