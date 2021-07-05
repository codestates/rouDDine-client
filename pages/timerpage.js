import React, { useEffect } from 'react';
import styled from 'styled-components';
import HeadInfo from '../src/components/HeadInfo';
import Nav from '../src/components/Nav';
import useLocalStorage from '../util/useLocalStorage';

let Body = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  padding: 7%;
  /* justify-content: space-between; */
`;

let Info = styled.div`
  display: flex;
  justify-content: space-around;
  div {
    font-size: 3rem;
  }
`;

let Time = styled.div`
  font-family: 'digital';
  align-self: center;
  font-size: 15rem;
  margin: 5%;
`;

let Button = styled.div`
  align-self: center;
  font-size: 5rem;
  :hover {
    cursor: pointer;
  }
`;

export default function timerpage() {
  // 내려받은 총합 시간? 을 useState에 세팅
  const [hours, setHours] = useLocalStorage('hours', 1);
  const [minutes, setMinutes] = useLocalStorage('minutes', 1);
  const [seconds, setSeconds] = useLocalStorage('seconds', 0);
  const [isRunning, setIsRunning] = useLocalStorage('isRunning', false);

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        if (hours > 0) {
          if (minutes === 0 && seconds === 0) {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          }
        }
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(timer);
          } else {
            if (minutes) {
              setMinutes(minutes - 1);
              setSeconds(59);
            }
          }
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isRunning, hours, minutes, seconds]);

  function reset() {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
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
        <Button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? '정지' : '시작'}
        </Button>
        {!isRunning && <Button onClick={() => reset()}>재시작</Button>}
      </Body>
    </>
  );
}
