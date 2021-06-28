import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const WorkoutList = styled.li`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
`;

const WorkoutItem = styled.a`
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

const WorkoutTitle = styled.h2`
  /* margin-left: 20px; */
  padding: 40px 0;
`;

const WorkoutTime = styled.h4`
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

const WorkoutButton = styled.button`
  flex: 1 1 auto;
`;

export default function WorkoutLists() {
  return (
    <WorkoutList>
      <Link href="/">
        <WorkoutItem>
          <Image
          src={'/'}
          width={80}
          height={80}
          alt="아이콘"
          />
          <WorkoutTitle>
          운동 이름
          </WorkoutTitle>
          <WorkoutTime>
            시간
          </WorkoutTime>
          <ButtonContainer>
            <WorkoutButton>삭제</WorkoutButton>
            <WorkoutButton>드래그</WorkoutButton>
          </ButtonContainer>
        </WorkoutItem>
      </Link>
    </WorkoutList>
  )
}
