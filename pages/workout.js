import React from 'react'
import styled from 'styled-components'
import WorkoutLists from '../components/WorkoutLists'


const WorkoutContainer = styled.ul`
  margin: 10px;
  padding : 10% 20%;
`;


export default function workout() {
  return (
    <>
    <h1>workout page</h1>
    <WorkoutContainer>
      <WorkoutLists />
      <WorkoutLists />
      <WorkoutLists />
      <WorkoutLists />
    </WorkoutContainer>
    </>
  )
}
