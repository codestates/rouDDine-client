import styled from 'styled-components'
import RoutineLists from '../../components/RoutineLists'
import HeadInfo from '../../components/HeadInfo';
import Nav from '../../components/Nav'
import axios from 'axios';
import {useState, useEffect} from 'react'

const RoutineContainer = styled.ul`
  margin: 10px;
  padding : 0 20%;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin: 40px;
`;

const SubTitle = styled.h3`
  text-align: center;
`;

const AddButton = styled.button`
  background-color: black;
  color: white;
  font-size: large;
  margin: 0 45%;
  cursor: pointer;
`;

export default function Routine() {
  const [routine, setRoutine] = useState(null)

  const getRoutine = async () => {
    const body = {
      routine_name: "루틴1",
      userid: "1",
    }
    const url = `http://localhost:8000/routine/`
    await axios.get(url, body)
    .then((res) => {
      console.log(res)
    })
  }

  console.log(routine)

  useEffect(() => {
    getRoutine()
  }, [])

  return (
    <>
    <HeadInfo/>
    <Nav/>
    <PageTitle>Routine page</PageTitle>
    <SubTitle>오늘 걷지 않으면 내일은 뛰어야 된다</SubTitle>
    <AddButton>루틴 추가</AddButton>
    <RoutineContainer>
      <RoutineLists />
      <RoutineLists />
      <RoutineLists />
      <RoutineLists />
    </RoutineContainer>
    </>
  )
}
