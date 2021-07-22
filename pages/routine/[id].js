import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
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
        <ContainerTitle>
          <div>나만의 루틴을 완성한 후</div>
          <div> 운동을 시작하세요</div>
        </ContainerTitle>
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
  height: 100vh;
  width: 100vw;
`;

const ContainerTitle = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  font-size: 2.4rem;
  font-family: DoHyeon-Regular;
  margin: 120px 0 50px 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
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

  @media (max-width: 1280px) {
    display: none;
  }
`;

const SecondSection = styled.div`
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  border-radius: 30px;

  @media (max-width: 1280px) {
    max-width: 450px;
    flex-direction: column-reverse;
  }
`;
