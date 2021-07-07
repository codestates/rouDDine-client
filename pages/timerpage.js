import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import HeadInfo from '../src/components/HeadInfo';
import { routineStart, timerStart, timerTime } from '../redux/reducers/timer';

export default function timerpage() {
  const dispatch = useDispatch();
  const isRunning = useSelector((state) => state.timer.isRunning);
  const hours = useSelector((state) => state.timer.hours);
  const minutes = useSelector((state) => state.timer.minutes);
  const seconds = useSelector((state) => state.timer.seconds);
  const time = useSelector((state) => state.timer.time);

  useEffect(() => {
    dispatch(timerTime(seconds, minutes, hours));
    //렌더링되고 딱한번만 저장(재시작 기능을위해서 원래시간)
  }, []);

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        if (hours > 0) {
          if (minutes === 0 && seconds === 0) {
            dispatch(routineStart(59, 59, hours - 1));
            //1시간이상일때 1시0분0초 뒤에는 59분59초
          }
        }
        if (seconds > 0) {
          dispatch(routineStart(seconds - 1, minutes, hours));
          //1초씩 흐르는 시간흐름
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(timer);
            //0시간0분0초 일시 함수종료
          } else {
            if (minutes > 0) {
              dispatch(routineStart(59, minutes - 1, hours));
              //1분이상이면 0시1분0초 뒤에는 0시0분59초
            }
          }
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isRunning, hours, minutes, seconds]);

  function reset() {
    dispatch(routineStart(time.seconds, time.minutes, time.hours));
  }
  return (
    <>
      <HeadInfo />
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
