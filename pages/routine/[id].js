import styled from 'styled-components';
import RoutineLists from './RoutineLists';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { currentRoutine } from '../../redux/reducers/routine';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react'
import TodayRoutine from '../workout/Dnd';
import Tabmenu from '../../src/components/Tabmenu'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;

`;

const HeadSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

const RoutineSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 30px;
  border: 2px inset;
  box-shadow: 0 0 5px 0px;
/*     
  @media ( max-width: 768px ) {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 300px;
  justify-content: start;
  align-items: center; 
  } */
`;

const BodySection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
`;

const BodyLeftSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 1px dotted;
  width: 50%;
  height: 100%;
`;

const BodyRightSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 50%;

`;

const DndSection = styled.section`
  width: 100vw;
`;
// const RoutineSection = styled.section`
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

const PageTitle = styled.h1`
  text-align: center;
  margin: 5px;
`;

const SubTitle = styled.h3`
  text-align: center;
`;

const TabMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default function Routine() {
  const routines = useSelector((state) => state.routine.result);
  const [workouts, setWorkouts] = useState(null);
  const dispatch = useDispatch();
  const userId = 1;
  console.log(userId);
  console.log(routines);

  useEffect(() => {
    getRoutine(userId);
  }, []);

  const getRoutine = async (userId) => {
    const url = `http://localhost:3000/routine`;
    const res = await axios.get(url, { withCredentials: true });
    dispatch(currentRoutine(res.data));
    // setRoutines(res.data.result)
    console.log(res);
  };

  const addRoutine = async (userId) => {
    const url = `http://localhost:3000/routine`;
    const body = {
      userid: userId,
      routine_name: '새 루틴',
      share: 'false',
    };
    const res = await axios.post(url, body, { withCredentials: true });
    console.log(res);
    await getRoutine(userId);
  };

  return (
    <>
    <Container>
      <HeadSection>
      </HeadSection>
      <BodySection>
        <BodyLeftSection>
      <RoutineSection>
        {routines &&
          routines.map((routine) => (
            <RoutineLists
            id={routine.id}
            workouts={workouts}
            userId={userId}
            key={routine.id}
            routines={routines}
            routine={routine}
            routineId={routine.id}
            getRoutine={getRoutine}
            />
            ))}
        <Button 
          onClick={()=>{addRoutine(userId)}}
          icon={{ as: 'i', className: 'plus'}}
          />
      </RoutineSection>
          <TabMenuContainer>
            <Tabmenu></Tabmenu>
          </TabMenuContainer>
        </BodyLeftSection>
        <BodyRightSection>
          <DndSection>
            <TodayRoutine></TodayRoutine>
          </DndSection>
        </BodyRightSection>
        </BodySection>
    </Container>
    </>
  );
}
