import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import HeadInfo from '../src/components/HeadInfo';
import Nav from '../src/components/Nav';
import { routineStart, timerStart } from '../redux/reducers/timer';
import axios from 'axios';

let Body = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  padding: 7%;
  /* border: 3px solid green; */
`;

let Info = styled.div`
  display: flex;
  justify-content: space-around;
  /* border: 3px solid blue; */
  div {
    font-size: 3rem;
  }
`;

let Time = styled.div`
  font-family: 'digital';
  align-self: center;
  font-size: 15rem;
  margin: 5%;
  width: 100%;
  text-align: center;
  /* border: 3px solid red; */
`;

let Button = styled.div`
  align-self: center;
  font-size: 5rem;
  :hover {
    cursor: pointer;
  }
`;

export default function timerpage() {
  const dispatch = useDispatch();
  const isRunning = useSelector((state) => state.timer.isRunning);
  const hours = useSelector((state) => state.timer.hours);
  const minutes = useSelector((state) => state.timer.minutes);
  const seconds = useSelector((state) => state.timer.seconds);

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        if (hours > 0) {
          if (minutes === 0 && seconds === 0) {
            dispatch(routineStart(59, 59, hours - 1));
          }
        }
        if (seconds > 0) {
          dispatch(routineStart(seconds - 1, minutes, hours));
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(timer);
          } else {
            if (minutes > 0) {
              dispatch(routineStart(59, minutes - 1, hours));
            }
          }
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isRunning, hours, minutes, seconds]);

  function reset() {
    console.log(seconds);
    dispatch(routineStart(seconds, minutes, hours));
    dispatch(timerStart());
  }
  return (
    <>
      <HeadInfo />
      <Nav />
      <Body>
        <Info>
          <div>루틴이름</div>
          <div>현재운동</div>
          <div>현재세트</div>
        </Info>

        <Time>
          {hours ? `${hours}:` : null}
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </Time>
        <Button onClick={() => dispatch(timerStart())}>
          {isRunning ? '정지' : '시작'}
        </Button>
        {!isRunning && <Button onClick={() => reset()}>재시작</Button>}
      </Body>
    </>
  );
}
