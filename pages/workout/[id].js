import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Dnd from './Dnd/Dnd';
import router from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { currentWorkout } from '../../redux/reducers/workout';
import initData from './Dnd/initData';
import cookies from 'next-cookies';

function Workout({ data }, context) {
  console.log(data);
  console.log(context);
  const allCookies = cookies(context);
  const token = allCookies.accessToken;
  console.log(token);
  const [workouts, setWorkouts] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:3000/routine?routine_id=1`, //동적으로 받기
      withCredentials: true,
    }).then((res) => setWorkouts(res.data));
  }, []);

  console.log('워크아웃!!!!!!!!!!!!', workouts);

  return (
    <>
      <button onClick={() => router.push(`/add`)}>운동 추가하기</button>
      {workouts && <Dnd curWorkouts={workouts}></Dnd>}
    </>
  );
}
export default Workout;

export const getServerSideProps = async (context) => {
  let temp = { props: {} };
  const allCookies = cookies(context);
  const token = allCookies.accessToken;

  try {
    await axios({
      method: 'get',
      url: `http://localhost:3000/routine?routine_id=${context.params.id}`, // 루틴아이디를 동적으로 받아야됨
      headers: {
        Cookie: `accessToken=${token}`,
        withCredentials: true,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log('200', res);
          temp = {
            props: {
              data: res.data,
            },
          };
        } else {
          console.log('not 200', res);
        }
      })
      .catch((err) => {
        console.log('catcherr', err);
        alert('예상치 못한 오류가 발생했습니다. \n 잠시 후 다시 시도해주세요.');
      });
  } catch (err) {
    console.log('catcherr', err);
  }
  return temp;
};
