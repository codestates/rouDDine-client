import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import HeadInfo from '../src/components/HeadInfo';
import axios from 'axios';
import { useRouter } from 'next/router';
import { route } from 'next/dist/next-server/server/router';
import { getCurWorkout } from '../redux/reducers/id_reducer';

const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20%;
`;

const AddTitle = styled.h1`
  text-align: center;
`;

const AddInput = styled.input`
  margin: 40px;
  padding: 5px;
`;

const AddInput2 = styled.input`
  margin: 40px;
  padding: 5px;
  height: 150px;
`;

const AddButton = styled.button`
  background-color: black;
  color: white;
  width: 80px;
  font-size: 0.8rem;
  margin: 30px 45%;
  cursor: pointer;
`;

export default function add() {
  const router = useRouter();
  const [routine, setRoutine] = useState(null);
  const routineId = useSelector((state) => state.id_reducer.curRoutineId);
  const userId = useSelector((state) => state.id_reducer.userId);
  const [workoutInfo, setWorkoutInfo] = useState({});
  // console.log(routineId.curRoutineId)

  const onChange = (e) => {
    const { value, name } = e.target;
    setWorkoutInfo({ ...workoutInfo, [name]: value });
  };

  console.log(workoutInfo);

  const addWorkout = async () => {
    const url = `http://localhost:8000/exercise`;
    const body = {
      userid: userId,
      name: workoutInfo.name,
      set_time: workoutInfo.time,
      rest_time: workoutInfo.rest,
      memo: workoutInfo.memo,
    };
    await axios.post(url, body).then((res) => {
      console.log(res);
      router.push(`/workout/${routineId}`);
    });
  };

  return (
    <>
      <HeadInfo />
      <AddContainer>
        <AddInput
          placeholder='이름'
          name='name'
          onChange={(e) => onChange(e)}
        ></AddInput>
        <AddInput
          placeholder='운동 시간'
          name='time'
          onChange={(e) => onChange(e)}
        ></AddInput>
        <AddInput
          name='rest'
          placeholder='휴식 시간'
          onChange={(e) => onChange(e)}
        ></AddInput>
        <AddInput2
          name='memo'
          placeholder='피드백(메모)'
          onChange={(e) => onChange(e)}
        ></AddInput2>
      </AddContainer>
      <AddButton onClick={addWorkout}>운동 추가</AddButton>
    </>
  );
}
