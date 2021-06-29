import React from 'react'
import styled from 'styled-components'

const WorkoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const WorkoutName = styled.span`
  
`;

const WorkoutTime = styled.span`

`;

const WorkoutButtonBox = styled.span`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const WorkoutButton = styled.button`
  font-size: 0.5rem;
`;

export default function WorkoutLists({item}) {
  // const [name, set, set_time, rest] = item;
  console.log(item)
  return (
    <WorkoutContainer>
      <WorkoutName>{item.name}</WorkoutName>
      <WorkoutTime>{(item.set_time + item.rest) * item.set}</WorkoutTime>
      <WorkoutButtonBox>
        <WorkoutButton>삭제</WorkoutButton>
      </WorkoutButtonBox>
    </WorkoutContainer>
  )
}
