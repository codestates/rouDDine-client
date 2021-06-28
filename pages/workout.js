import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

const WorkoutContainer = styled.ul`
  margin: 10px;
  padding : 10% 20%;
`;

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
`;

const WorkoutTime = styled.h4`
  /* margin-left: 20px; */
`;

// const ButtonContainer = st

export default function workout() {
  return (
    <>
    <h1>workout page</h1>
    <WorkoutContainer>
      <WorkoutList>
        <Link href="/">
          <WorkoutItem>
            <Image
            src={'/'}
            width={80}
            height={80}
            alt="아이콘이 들어갈 자리입니다"
            />
            <WorkoutTitle>
            벤치 프레스
            </WorkoutTitle>
            <WorkoutTime>
              3분
            </WorkoutTime>
          </WorkoutItem>
        </Link>
      </WorkoutList>
      <WorkoutList>
        <Link href="/">
          <WorkoutItem>
            <Image
            src={'/'}
            width={80}
            height={80}
            alt="아이콘이 들어갈 자리입니다"
            />
            <WorkoutTitle>
            데드 리프트
            </WorkoutTitle>
            <WorkoutTime>
              5분
            </WorkoutTime>
          </WorkoutItem>
        </Link>
      </WorkoutList>
      <WorkoutList>
        <Link href="/">
          <WorkoutItem>
            <Image
            src={'/'}
            width={80}
            height={80}
            alt="아이콘이 들어갈 자리입니다"
            />
            <WorkoutTitle>
            스쿼트
            </WorkoutTitle>
            <WorkoutTime>
              2분
            </WorkoutTime>
          </WorkoutItem>
        </Link>
      </WorkoutList>
    </WorkoutContainer>
    </>
  )
}
