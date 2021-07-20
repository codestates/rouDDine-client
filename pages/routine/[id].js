import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import TodayRoutine from '../../src/components/workout';
import Tabmenu from '../../src/components/newTabMenu';
import TimerModal from '../../src/components/TimerModal';

function New({ data }) {
  const routineId = data[0].id;
  const [currentWorkouts, setCurrentWorkouts] = useState(data[0].tasks);
  const [timerOpen, setTimerOpen] = useState(false);

  return (
    <>
      <Container>
        <ContainerTitle>나만의 루틴을 완성한 후 운동을 시작하세요</ContainerTitle>
        <SectionContainer>
          <FirstSection>
            <Tabmenu data={data[1]} routineId={routineId} currentWorkouts={currentWorkouts} setCurrentWorkouts={setCurrentWorkouts} />
          </FirstSection>
          <SecondSection>
            <TodayRoutine timerOpen={timerOpen} setTimerOpen={setTimerOpen} routineId={routineId} currentWorkouts={currentWorkouts} setCurrentWorkouts={setCurrentWorkouts} />
          </SecondSection>
        </SectionContainer>
      </Container>
      <TimerModal taskIds={data[0].tasks} timerOpen={timerOpen} setTimerOpen={setTimerOpen}></TimerModal>
    </>
  );
}

export default New;

export async function getServerSideProps(ctx) {
  //하나의 루틴 불러오기
  const token = ctx.req.headers.cookie.split(' ')[1].split('=')[1];
  const res1 = await axios.get(`${process.env.NEXT_PUBLIC_url}/testroutine?routine_id=${ctx.params.id}`, { headers: { Cookie: `accessToken=${token}` } });
  const data = res1.data;
  //모든 루틴 불러오기
  const res2 = await axios.get(`${process.env.NEXT_PUBLIC_url}/testexercise`, { headers: { Cookie: `accessToken=${token}` } });
  const items = res2.data.result;

  return {
    props: {
      data: [data, items],
    },
  };
}

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
  width: 30%;
  /* background-color: pink; */
  border-radius: 30px;
`;
