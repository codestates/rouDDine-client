import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { timerSet, timerRunning, timerReset, timerWorkoutSet, timerCurWorkout, timerIsResting, totalTime } from '../redux/reducers/timer';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faStop, faBackward, faForward } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
export default function timerpage() {
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
  const taskIds = useSelector((state) => state.routineInfo.tasks);
  useEffect(() => {
    // 최초 한번
    convertTime(taskIds);
  }, []);

  useEffect(() => {
    convertTime(taskIds);
  }, [cur]);

  const convertTime = (taskIds) => {
    //초로만 받은걸 분, 초 로
    const time = taskIds[cur].set_time;
    const min = parseInt(time / 60); //분
    const sec = time % 60; // 초
    dispatch(timerSet(sec, min));
    dispatch(timerReset(sec, min));
  };

  const finishedTotalTime = (taskIds, cur) => {
    //운동시간 끝내면 세트마다 운동한 시간 축적시키기
    dispatch(totalTime(taskIds[cur].set_time));
  };

  // convertTime(taskIds);

  const afterTheEnd = (taskIds) => {
    //workout_cur - cur , taskIds - 받아올 요청 데이터 , set
    //인덱스(현재운동), 루틴데이터
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
      dispatch(timerSet(taskIds[cur].rest_time % 60, parseInt(taskIds[cur].rest_time / 60)));
      dispatch(timerReset(taskIds[cur].rest_time % 60, parseInt(taskIds[cur].rest_time / 60)));
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
  // 쉬는건 토글식으로
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
            finishedTotalTime(taskIds, cur);
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
      }, 100);
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
    <>
      <Body>
        <Info>
          {/* <div>{data ? data.name : ''}</div> */}
          <div>{isResting ? '휴식 시간' : taskIds[cur].name}</div>
          <div>{taskIds ? `${set} / ${taskIds[cur].set_number} 세트` : null}</div>
          <div>{isResting ? '휴식 시간' : taskIds[cur].name}</div>
        </Info>
        <Memo>{taskIds[cur].memo ? taskIds[cur].memo : ' '}</Memo>
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
    </>
  );
}

// export const getServerSideProps = async (ctx) => {
//   const token = ctx.req.headers.cookie.split(' ')[1].split('=')[1];
//   const res = await axios.get(`${process.env.NEXT_PUBLIC_url}/testroutine?routine_id=11`, {
//     headers: { Cookie: `accessToken=${token}` },
//     withCredentials: true,
//   });
//   const data = res.data;
//   return {
//     props: {
//       data,
//     },
//   };
// };

let Body = styled.div`
  display: flex;
  width: 35vw;
  height: 85vh;
  padding: 80px;
  flex-direction: column;
  justify-content: space-between;
  color: #3e3e3e;
  border-radius: 20px;
  -webkit-backdrop-filter: blur(50px);
  backdrop-filter: blur(50px);

  @media (max-width: 1280px) {
    max-width: 100%;
    height: 80%;
    margin-top: 15px;
    padding: 30px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    height: 80%;
    margin-top: 15px;
    padding: 30px;
  }
`;

let Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 40px 0px 0px 0px;
  font-size: 2rem;
  font-weight: bold;
  font-family: esamanru_Light;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    min-width: 45%;
    height: 100%;
    padding: 10px 0;

    :nth-child(2) {
      font-size: 40px;
    }

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
  /* border: 3px solid blue; */
`;
const Memo = styled.div`
  width: 300px;
  height: 100px;
  border-radius: 4px;
  /* border: 1px solid grey; */
  margin: 10px 0px 10px 0px;
  padding: 10px;
  align-self: center;
  overflow: auto;
`;
let Time = styled.div`
  font-family: 'digital';
  background-color: #ffffff;
  padding: 32% 0;
  margin-top: 40px;
  align-self: center;
  width: 380px;
  height: 380px;
  border: 4px solid #ffd951;
  border-radius: 50%;
  font-family: esamanru_Medium;
  font-size: 7rem;
  text-align: center;

  @media (max-width: 1280px) {
    /* max-width: 80%; */
    width: 100%;
    font-size: 6rem;
  }

  @media (max-width: 768px) {
    /* max-width: 80%; */
    width: 100%;
    font-size: 6rem;
  }
`;

let ButtonContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px;
  margin-top: auto;
  bottom: 0;
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
