import React, {useState} from 'react'
import styled from 'styled-components'
import RoutineLists from '../src/components/RoutineLists'
import HeadInfo from '../src/components/HeadInfo';
import Nav from '../src/components/Nav'
import axios from 'axios'
import { useRouter } from 'next/router'

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
  padding : 5px;
`;

const AddInput2 = styled.input`
  margin: 40px;
  padding : 5px;
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
  const [routine, setRoutine] = useState(null)

  const addWorkout = async() => {
    const url = `http://localhost:8000/exercise`
    const body = {
      userid : 1,
      name: "추가된 workout",
      set_time: 50,
      rest_time : 20,
      memo: "메모입니다" 
    }
    await axios.post(url, body)
    .then((res) => {
      console.log(res)
    })
  }


  return (
    <>
      <HeadInfo/>
      <Nav/>
      <AddTitle>운동 이름</AddTitle>
      <AddContainer>
        <AddInput placeholder="세트 수"></AddInput>
        <AddInput placeholder="운동 시간"></AddInput>
        <AddInput placeholder="휴식 시간"></AddInput>
        <AddInput2 placeholder="피드백(메모)"></AddInput2>
      </AddContainer>
      <AddButton 
      onClick={addWorkout}
      onClick={() => router.push(`/workout/${routine.id}`)}    
      >운동 추가</AddButton>    
    </>
    )
}
