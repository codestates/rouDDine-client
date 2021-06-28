import React from 'react'
import styled from 'styled-components'
import HeadInfo from '../components/HeadInfo';
import RoutineLists from '../components/RoutineLists'
import Nav from '../components/Nav'


const RoutineContainer = styled.ul`
  margin: 10px;
  padding : 0 20%;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin: 40px;
`;

const SubTitle = styled.h3`
  text-align: center;
`;

export default function Routine() {
  return (
    <>
    <HeadInfo/>
    <Nav/>
    <PageTitle>Routine page</PageTitle>
    <SubTitle>오늘 걷지 않으면 내일은 뛰어야 된다</SubTitle>
    <RoutineContainer>
      <RoutineLists />
      <RoutineLists />
      <RoutineLists />
      <RoutineLists />
    </RoutineContainer>
    </>
  )
}
