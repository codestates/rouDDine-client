import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Dnd from './Dnd/Dnd';
import router from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { currentWorkout } from '../../redux/reducers/workout';
import initData from './Dnd/initData';
import cookies from 'next-cookies';

function Workout(ctx) {
  console.log('CTX : ', ctx);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => router.push(`/add`)}>운동 추가하기</button>
      {/* {workouts && <Dnd curWorkouts={workouts}></Dnd>} */}
    </>
  );
}
export default Workout;

export const getServerSideProps = async (ctx) => {
  const token = ctx.req.headers.cookie.split(' ')[1].split('=')[1];
  // const allCookies = cookies(ctx);
  // const token = allCookies;
  const res = await axios.get('http://localhost:3000/routine?routine_id=1', {
    headers: { Cookie: `accessToken=${token}` },
    withCredentials: true,
  });
  const data = res.data;
  return {
    props: {
      data,
    },
  };
};
