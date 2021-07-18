import styled from 'styled-components';
import axios from 'axios';
import TodayRoutine from '../../src/components/workout.js';
import Tabmenu from '../../src/components/Tabmenu';
import Timer from '../../src/components/timerpage';

export default function Main(ctx) {
  const taskIds = ctx.data.tasks;
  const data = ctx.data;

  const TimerOpenHandler = () => {
    setTimerOpen(!timerOpen)
  }

  return (
    <>
      <Container>
        <HeadSection />
        <BodySection>
          <TraningSection>
            <Tabmenu></Tabmenu>
          </TraningSection>
          <BodyLeftSection>
            <TodayRoutine data={data} />
          </BodyLeftSection>
          <BodyRightSection>
            <Timer taskIds={taskIds} />
          </BodyRightSection>
        </BodySection>
      </Container>
    </>
  )
}

export async function getStaticProps(ctx) {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_url}/testroutine?routine_id=${ctx.params.id}`, { withCredentials: true });
  const data = res.data;
  return {
    props: {
      data: data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      // { params: { id: '2' } },
      // { params: { id: '3' } },
      // { params: { id: '4' } },
      // { params: { id: '5' } },
      // { params: { id: '6' } },
      // { params: { id: '7' } },
      // { params: { id: '8' } },
    ],
    fallback: false,
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
