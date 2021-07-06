import styled from 'styled-components';
import RoutineLists from '../../src/components/RoutineLists';
import HeadInfo from '../../src/components/HeadInfo';
import Nav from '../../src/components/Nav';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import initialData from '../workout/initData';
import { getRoutineId } from '../../redux/reducers/routine_id';

const RoutineContainer = styled.ul`
  margin: 10px;
  padding: 0 20%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  button {
    font-size: 1em;
  }
`;

const PageTitle = styled.h1`
  text-align: center;
  margin: 40px;
`;

const SubTitle = styled.h3`
  text-align: center;
`;

export default function Routine() {
  const userId = useSelector((state) => state.login.userId);
  const [routines, setRoutines] = useState(null);
  const getRoutine = async () => {
    const url = `http://localhost:8000/routine?userid=${userId}`;
    await axios.get(url).then((res) => {
      setRoutines(res.data.result);
    });
  };

  const addRoutine = async () => {
    const url = `http://localhost:8000/routine`;
    const body = {
      userid: `${userId}`,
      routine_name: '새 루틴',
      share: 'false',
    };
    await axios.post(url, body).then((res) => {
      console.log(res);
      console.log(`유저${userId}의 루틴을 생성했습니다.`);
    });
  };

  useEffect(() => {
    getRoutine();
  }, [addRoutine]);

  return (
    <>
      <HeadInfo />
      <Nav />
      <PageTitle>Routine page</PageTitle>
      <SubTitle>오늘 걷지 않으면 내일은 뛰어야 된다</SubTitle>
      <RoutineContainer>
        <button onClick={addRoutine}>루틴추가</button>
        {routines &&
          routines.map((routine) => (
            <RoutineLists
              userId={userId}
              routines={routines}
              key={routine.id}
              routine={routine}
              getRoutine={getRoutine}
            />
          ))}
      </RoutineContainer>
    </>
  );
}
