import React, { useEffect } from "react";
import styled from "styled-components";
import HeadInfo from "../components/HeadInfo";
import Nav from "../components/Nav";
import useLocalStorage from "../utils/useLocalStorage";

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
  const [hours, setHours] = useLocalStorage("hours", 0);
  const [minutes, setMinutes] = useLocalStorage("minutes", 10);
  const [seconds, setSeconds] = useLocalStorage("seconds", 0);
  const [isRunning, setIsRunning] = useLocalStorage("isRunning", false);

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(timer);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isRunning, minutes, seconds]);

  function reset() {
    setHours(0);
    setMinutes(9);
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
          {isRunning ? "정지" : "시작"}
        </Button>
        {!isRunning && <Button onClick={() => reset()}>재시작</Button>}
      </Body>
    </>
  );
}
