import styled from 'styled-components'
import RoutineLists from '../../components/RoutineLists'
import HeadInfo from '../../components/HeadInfo';
import Nav from '../../components/Nav'
import axios from 'axios';
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';

const RoutineContainer = styled.ul`
  margin: 10px;
  padding : 0 20%;
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
  const login = useSelector(state => state.login);
  const [routines, setRoutines] = useState(null)

  const getRoutine = async () => {
    // const url = `http://localhost:8000/routine?userid=${login.id}`
    const url = `http://localhost:8000/routine?userid=1`
    console.log(url)

    await axios.get(url)
    .then((res) => {
      setRoutines(res.data.result)
    })
  }

  const addRoutine = async () => {
    const url = `http://localhost:8000/routine`
    const body = {
      share: "false",
      routine_name: `새 루틴`,
      userid: "1",
    }
    
    await axios.post(url, body)
    .then((res) => {
      getRoutine()
      // console.log(res)
    })
  }



  useEffect(() => {
    getRoutine()
  }, [])

  return (
    <>
    <HeadInfo/>
    <Nav/>
    <PageTitle>Routine page</PageTitle>
    <SubTitle>오늘 걷지 않으면 내일은 뛰어야 된다</SubTitle>
      <RoutineContainer>
        <button onClick={addRoutine}>루틴추가</button>
        {routines && routines.map((routine) => (
          <RoutineLists key={routine.id} routine={routine} getRoutine={getRoutine}/>
          ))}
      </RoutineContainer>
    </>
  )
}
