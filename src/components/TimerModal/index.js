import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { timerSet, timerRunning, timerReset, timerWorkoutSet, timerCurWorkout, timerIsResting } from '../../../redux/reducers/timer';
import { faPause, faPlay, faStop, faBackward, faForward, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';

function TimerModal({ setTimerOpen, timerOpen, taskIds }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const isRunning = useSelector((state) => state.timer.isRunning);
  const hours = useSelector((state) => state.timer.hours);
  const minutes = useSelector((state) => state.timer.minutes);
  const seconds = useSelector((state) => state.timer.seconds);
  const reset = useSelector((state) => state.timer.reset);
  const set = useSelector((state) => state.timer.workout_set);
  const cur = useSelector((state) => state.timer.workout_cur);
  const isResting = useSelector((state) => state.timer.isResting);

  useEffect(() => {
    // 최초 한번
    convertTime(taskIds);
  }, []);

  useEffect(() => {
    dispatch(timerSet(taskIds[cur].set_time_sec, taskIds[cur].set_time_min));
    dispatch(timerReset(taskIds[cur].set_time_sec, taskIds[cur].set_time_min));
  }, [cur]);

  const convertTime = (taskIds) => {
    //초로만 받은걸 분, 초 로
    const min = taskIds[cur].set_time_min;
    const sec = taskIds[cur].set_time_sec;
    dispatch(timerSet(sec, min));
    dispatch(timerReset(sec, min));
  };

  //0시0분0초시 아래에서 운동변경, 휴식시간으로 변경 등등
  const afterTheEnd = (taskIds) => {
    //인덱스(현재운동), 루틴데이터
    if (cur + 1 > taskIds.length - 1) {
      //더이상 할 운동이 없는경우
      return;
    }
    if (!isResting) {
      //마지막 세트이후 휴식 없음
      if (set === taskIds[cur].set_number) {
        //각 운동 마지막세트엔 휴식시간 없이 바로 다음 운동
        if (cur < taskIds.length - 1) {
          dispatch(timerCurWorkout(cur + 1));
          dispatch(timerWorkoutSet(1));
          return;
        }
      }
      dispatch(timerIsResting());
      dispatch(timerSet(taskIds[cur].rest_time_sec, taskIds[cur].rest_time_min));
      dispatch(timerReset(taskIds[cur].rest_time_sec, taskIds[cur].rest_time_min));
      return;
    } else {
      //쉬는시간 끝
      dispatch(timerIsResting());
    }
    if (cur + 1 > taskIds.length - 1) {
      //더이상 할 운동이 없는경우
      return;
    }
    if (taskIds[cur].set_number < set + 1) {
      //다음 운동 으로 넘어가기 , 세트 1로 세팅
      dispatch(timerCurWorkout(cur + 1));
      dispatch(timerWorkoutSet(1));
      convertTime(taskIds);
    } else {
      // 세트 올리기
      dispatch(timerWorkoutSet(set + 1));
      convertTime(taskIds);
    }
  };

  // 시간흐름 함수
  useEffect(() => {
    if (isRunning) {
      const timeFlow = setInterval(() => {
        if (hours > 0) {
          if (minutes === 0 && seconds === 0) {
            dispatch(timerSet(59, 59, hours - 1));
            //1시간이상일때 1시0분0초 뒤에는 59분59초
          }
        }
        if (seconds > 0) {
          dispatch(timerSet(seconds - 1, minutes, hours));
          //1초씩 흐르는 시간흐름
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(timeFlow);
            //0시간0분0초 일때 함수종료
            // finishedTotalTime(taskIds, cur);
            //완료한 운동시간 저장하기
            afterTheEnd(taskIds, cur);
            //이후 운동넘어가기
          } else {
            if (minutes > 0) {
              dispatch(timerSet(59, minutes - 1, hours));
              //1분이상이면 0시1분0초 뒤에는 0시0분59초
            }
          }
        }
      }, 1000);
      return () => clearInterval(timeFlow);
    }
  }, [isRunning, hours, minutes, seconds, set, cur, isResting]);

  const resetTimer = () => {
    dispatch(timerSet(reset.seconds, reset.minutes, reset.hours));
    dispatch(timerRunning());
  };
  const nextWorkout = (taskIds, cur) => {
    if (cur < taskIds.length - 1) {
      if (isResting) {
        dispatch(timerIsResting());
      }
      if (isRunning) {
        dispatch(timerRunning());
      }
      dispatch(timerCurWorkout(cur + 1));
      dispatch(timerWorkoutSet(1));
      convertTime(taskIds);
    } else {
      return;
    }
  };
  const previousWorkout = (taskIds, cur) => {
    if (isResting) {
      dispatch(timerIsResting());
    }
    if (isRunning) {
      dispatch(timerRunning());
    }
    if (cur > 0) {
      dispatch(timerCurWorkout(cur - 1));
      dispatch(timerWorkoutSet(1));
      convertTime(taskIds);
    } else {
      return;
    }
  };
  return (
    <ModalContainer timerOpen={timerOpen}>
      <Body>
        <CloseBtn onClick={() => setTimerOpen(!timerOpen)}>
          <FontAwesomeIcon icon={faWindowClose}></FontAwesomeIcon>
        </CloseBtn>
        <Info>
          <div>{isResting ? '휴식 시간' : taskIds[cur].name}</div>
          <div>{taskIds ? `${set} / ${taskIds[cur].set_number} 세트` : ''}</div>
          <div>{taskIds[cur].memo}</div>
        </Info>

        <Time>
          {hours ? `${hours}:` : null}
          {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </Time>
        <ButtonContainer>
          <FontAwesomeIcon icon={faBackward} className='btn prev' onClick={() => previousWorkout(taskIds, cur)} />
          <div className='btn_center'>
            <Button onClick={() => dispatch(timerRunning())}>{isRunning ? <FontAwesomeIcon className='btn pause' icon={faPause} /> : <FontAwesomeIcon className='btn play' icon={faPlay} />}</Button>
            {isRunning && <FontAwesomeIcon className='btn stop' icon={faStop} onClick={() => resetTimer()} />}
          </div>
          <FontAwesomeIcon icon={faForward} className='btn next' onClick={() => nextWorkout(taskIds, cur)} />
        </ButtonContainer>
      </Body>
    </ModalContainer>
  );
}

export default TimerModal;

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 999;
  justify-content: center;
  align-items: center;
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  opacity: ${(props) => (props.timerOpen ? '100%' : '0%')};
  top: ${(props) => (props.timerOpen ? '0' : '-100%')};
`;

let Body = styled.div`
  z-index: 999;
  display: flex;
  min-width: 40vw;
  height: 90vh;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  color: #3e3e3e;
  border-radius: 20px;
  background-color: #ffffff;
  opacity: 0.95;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(12px);

  @media (max-width: 1280px) {
    max-width: 100%;
    height: 100%;
    margin-top: 15px;
    padding: 30px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    margin-top: 15px;
    padding: 30px;
  }
`;

const CloseBtn = styled.span`
  height: 60px;
  width: 60px;
  position: absolute;
  top: 10px;
  right: 0;
  font-size: 1.4rem;
  text-align: center;
`;

let Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 30px 0px 0px 0px;
  font-size: 2rem;
  font-weight: bold;
  font-family: esamanru_Light;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.2rem;
    min-width: 45%;
    height: 100%;
    padding: 10px 0;

    @media (max-width: 1280px) {
      width: 70%;
      font-size: 1.5rem;
      justify-content: space-around;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
`;

let Time = styled.div`
  font-family: 'digital';
  background-color: #ffffff;
  margin-top: 30px;
  padding-top: 150px;
  align-self: center;
  width: 27rem;
  height: 27rem;
  border: 4px solid #ffd951;
  border-radius: 50%;
  font-family: esamanru_Medium;
  font-size: 7rem;
  text-align: center;

  @media (max-width: 1280px) {
    width: 100%;
    font-size: 6rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 6rem;
  }
`;

let ButtonContainer = styled.div`
  margin: 40px 0 70px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  min-width: 8rem;
  .btn {
    font-size: 2.4rem;
    cursor: pointer;
    margin: 0 20px;
  }
  .btn_center {
    display: flex;
  }
  .stop,
  .pause {
    margin: 0px 20px 0px 20px;
  }
`;
let Button = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;
