import styled from 'styled-components';
import axios from 'axios';
import TodayRoutine from '../../src/components/workout.js';
import Tabmenu from '../../src/components/Tabmenu';
import Timer from '../../src/components/timerpage';

export default function Main(ctx) {
  const taskIds = ctx.data.tasks;
  const data = ctx.data;

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
  );
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
  height: 100%;
`;

const HeadSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

const BodySection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
`;

const BodyLeftSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-right: 1px dotted;
  min-width: 50vw;
  margin-top: 15px;
  height: 100%;
  overflow-y: auto;

  @media (max-width: 1280px) {
    min-width: 30%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const TraningSection = styled.div`
  background-color: #000035;
  height: 100%;
  min-width: 220px;
  box-sizing: border-box;
  margin-top: 15px;

  @media (max-width: 1280px) {
    display: none;
  }
`;

const BodyRightSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #000035;
  margin-top: 15px;
  width: 45vw;
  padding-bottom: 50px;
  height: 100%;

  @media (max-width: 1280px) {
    max-width: 90%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    font-size: 11em;
    font-size: 8rem;
    padding-bottom: 30px;
  }
`;

const DndSection = styled.div`
  /* width: 50vw; */
`;
// const RoutineSection = styled.div`
//   margin: 10px;
//   display: flex;
//   justify-content: center;
//   flex-direction: row;

//   @media ( max-width: 768px ) {
//     display: flex;
//     flex-direction: column;
//     flex-wrap: wrap;
//     max-width: 300px;
//     /* justify-content: start; */
//     /* align-items: center; */
//   }
// `;
