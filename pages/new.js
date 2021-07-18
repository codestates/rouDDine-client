import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { currentRoutine } from '../redux/reducers/routine';
import { useDispatch, useSelector } from 'react-redux';
import TodayRoutine from './workout';
import Timer from './timerpage';
import { routineInfo } from '../redux/reducers/routineInfo';
import Tabmenu from '../src/components/newTabMenu';
import TimerModal from '../src/components/TimerModal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* padding-top: 5%; */
  height: 100vh;
  width: 100vw;
`;

const ContainerTitle = styled.div`
  text-align: center;
  font-size: 2.4rem;
  font-family: DoHyeon-Regular;
  margin: 120px 0 50px 0;
`;


const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const FirstSection = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: row;
`;

const SecondSection = styled.div`
  max-height: 85vh;
  width:30%;
  /* background-color: pink; */
  border-radius: 30px;
`;

const ThirdSection = styled.div`
  height: 100%;
  width: 40%;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 50px;

`;



function New() {
  const [timerOpen, setTimerOpen] = useState(false)
  const routines = useSelector((state) => state.routine.result);
  // const routineId = useSelector((state) => state.routineInfo.id);
  const [workouts, setWorkouts] = useState(null);
  const dispatch = useDispatch();
  // const userId = 5;
  // console.log(userId);

  useEffect(() => {
    getMyRoutine(routineId);
  }, []);
  const routineId = 11;
  
  const getMyRoutine = async () => {
    const url = `${process.env.NEXT_PUBLIC_url}/testroutine?routine_id=1`;
    const res = await axios.get(url, { withCredentials: true });
    // console.log(res.data);
    console.log('겟루틴new@@@@@@@@');
    dispatch(routineInfo(res.data.id, res.data.name, res.data.tasks));
    // dispatch(dndUpdate(res.data.tasks))
  };

  const TimerOpenHandler = () => {
    setTimerOpen(!timerOpen)
  }

  return (
    <>
    <Container>
      <ContainerTitle>나만의 루틴을 완성한 후 운동을 시작하세요</ContainerTitle>
      <SectionContainer>
        <FirstSection>
          <Tabmenu></Tabmenu>
        </FirstSection>
        <SecondSection>
          <TodayRoutine TimerOpenHandler={TimerOpenHandler}></TodayRoutine>
        </SecondSection>
        {/* <ThirdSection>
          <Timer></Timer>
        </ThirdSection> */}
      </SectionContainer>
    </Container>
    <TimerModal setTimerOpen={setTimerOpen} timerOpen={timerOpen}></TimerModal>
    </>
  )
}

export default New