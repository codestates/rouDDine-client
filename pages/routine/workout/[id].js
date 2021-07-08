import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Dnd from './Dnd/Dnd'
import router from 'next/router';
import {useSelector, useDispatch} from 'react-redux'
import {currentWorkout} from '../../../redux/reducers/workout'


function Workout(context) {
  const [workouts, setWorkouts] = useState(null)
  console.log(context);
  const dispatch = useDispatch();
  console.log(workouts);

  const getWorkout = async() => {    
    const url = `http://localhost:8000/exercise`
    const res = await axios.get(url, {withCredentials:true})
    console.log(res.data.result);
    setWorkouts(res.data.result)
    dispatch(currentWorkout(res.data.result))
  }

  useEffect(() => {
    getWorkout();
  }, [])
  // const workouts = context;
  // const dispatch = useDispatch();
    
  // console.log(context.result)
  // console.log(workouts);


  // dispatch(currentWorkout(workouts))


  return (
    <>
    <button onClick={()=>router.push(`/add`)}>운동 추가하기</button>
    {workouts && 
      <Dnd
      curWorkouts={workouts}
      ></Dnd>
    }
    </>
  )
}
export default Workout


// export const getServerSideProps = async (context) => {
//   const url = `http://localhost:8000/exercise`
//   const res = await axios.get(url)
//   return {
//     props : {
//       data: res,
//     }
//   }
// }

