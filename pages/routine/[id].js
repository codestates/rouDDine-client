import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { currentRoutine } from '../../redux/reducers/routine';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';
import TodayRoutine from '../workout/Dnd';
import Tabmenu from '../../src/components/Tabmenu';

const RoutineContainer = styled.ul`
  margin: 10px;
  display: flex;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 300px;
    /* justify-content: start; */
    /* align-items: center; */
  }
`;

const PageTitle = styled.h1`
  text-align: center;
  margin: 5px;
`;

const SubTitle = styled.h3`
  text-align: center;
`;

const Container = styled.div`
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
    dispatch(currentRoutine(res.data.result));
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
      <PageTitle>Routine page</PageTitle>
      <SubTitle>오늘 걷지 않으면 내일은 뛰어야 된다</SubTitle>
      <RoutineContainer>
        {/* {routines &&
          routines.map((routine) => (
            <RoutineLists id={routine.id} workouts={workouts} userId={userId} key={routine.id} routines={routines} routine={routine} routineId={routine.id} getRoutine={getRoutine} />
          ))} */}
        <Button
          onClick={() => {
            addRoutine(userId);
          }}
          icon={{ as: 'i', className: 'plus' }}
        ></Button>
      </RoutineContainer>
      <Container>
        <Tabmenu></Tabmenu>
        <TodayRoutine></TodayRoutine>
      </Container>
    </>
  );
}
