import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const RoutineList = styled.li`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
`;

const RoutineItem = styled.a`
  padding: 0 20px;
  border: 1px solid blue;
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
  border: solid 1px green;
`;

const RoutineButton = styled.button`
  flex: 1 1 auto;
`;

export default function RoutineLists() {
  return (
    <RoutineList>
      <Link href="/">
        <RoutineItem>
          <Image
          src={'/'}
          width={80}
          height={80}
          alt="아이콘"
          />
          <RoutineTitle>
          루틴 이름
          </RoutineTitle>
          <RoutineTime>
            총 시간
          </RoutineTime>
          <ButtonContainer>
            <RoutineButton>삭제</RoutineButton>
            <RoutineButton>드래그</RoutineButton>
          </ButtonContainer>
        </RoutineItem>
      </Link>
    </RoutineList>
  )
}
