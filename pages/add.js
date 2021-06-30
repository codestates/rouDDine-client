import React from 'react'
import styled from 'styled-components'
import HeadInfo from '../components/HeadInfo';
import RoutineLists from '../components/RoutineLists'
import Nav from '../components/Nav'

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
  margin: 0 45%;
  cursor: pointer;
`;

export default function add() {
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
      <AddButton>운동 추가</AddButton>    
    </>
    )
}
