import React from 'react'
import styled from 'styled-components'
import WorkoutLists from '../components/WorkoutLists'
import HeadInfo from '../components/HeadInfo'
import Nav from '../components/Nav'


const WorkoutContainer = styled.ul`
  margin: 10px;
  padding : 0 20%;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin: 40px;
`;

const RoutineTitle = styled.h2`
  text-align: center;
  /* margin: 40px; */
`;

const AddButton = styled.button`
  background-color: black;
  color: white;
  font-size: large;
  margin: 0 45%;
  cursor: pointer;
`;

export default function workout() {
  return (
    <>
    <HeadInfo/>
    <Nav/>
    <PageTitle>workout page</PageTitle>
    <RoutineTitle>Routine Title</RoutineTitle>
    <AddButton>운동 추가</AddButton>
    <WorkoutContainer>
      <WorkoutLists />
      <WorkoutLists />
      <WorkoutLists />
      <WorkoutLists />
    </WorkoutContainer>
    </>
  )
}
