import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import data from '../data/data'
import icon from '../public/icon.jpg'

const RoutineList = styled.li`
  border: 3px outset black;
  display: flex;
  flex-direction: column;
`;

const RoutineItem = styled.a`
  padding: 0 20px;
  border: 2px solid black;
  list-style: none;
  margin: 20px;
  border-radius: 20px;
  background-color: white;
  font-size: 1rem;
  padding: 20px;
  vertical-align: middle;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const RoutineTitle = styled.h2`
  /* margin-left: 20px; */
  padding: 40px 0;
`;

const RoutineTime = styled.h4`
  /* margin-left: 20px; */
  padding: 30px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  vertical-align: middle;
  padding: 40px 0;
`;

const RoutineButton = styled.button`
  flex: 1 1 auto;
`;

export default function RoutineLists() {


  return (
    <RoutineList>
      {data.routines.map((routine) => (
        <Link key={routine.id} href="/workout">
        <RoutineItem>
          <Image
          src={icon}
          width={80}
          height={80}
          alt="아이콘"
          />
          <RoutineTitle>
          {routine.routine_name}
          </RoutineTitle>
          <RoutineTime>
            {routine.time}분
          </RoutineTime>
          <ButtonContainer>
            <RoutineButton>삭제</RoutineButton>
            <RoutineButton>드래그</RoutineButton>
          </ButtonContainer>
        </RoutineItem>
      </Link>
          ))}
    </RoutineList>
  )
}
