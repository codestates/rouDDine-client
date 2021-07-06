import React, {useEffect} from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import icon from '../../public/icon.jpg'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux';
import { getCurRoutine } from '../../redux/reducers/id_reducer'
import useLocalStorage from '../../util/useLocalStorage'
import axios from 'axios';

const RoutineList = styled.li`
  border: 3px outset black;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  justify-content: space-between;
`;

const RoutineItem = styled.div`
  padding: 0 20px;
  flex: 3 0 auto;
  border: 2px solid black;
  list-style: none;
  margin: 20px;
  border-radius: 20px;
  background-color: white;
  font-size: 1rem;
  padding: 20px;
  vertical-align: middle;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ItemContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-wrap: row;
    justify-content: space-between;
    flex : 1 0 auto;
`;

const RoutineTitle = styled.h2`
  /* margin-left: 20px; */
  padding: 40px 0;
`;

const RoutineTime = styled.h4`
  /* margin-left: 20px; */
  padding: 30px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  vertical-align: middle;
  padding: 40px 0;
`;

const DeleteButton = styled.button`
  flex: 1 1 auto;
`;

export default function RoutineLists({ routine, getRoutine }) {
  const dispatch = useDispatch()
  const router = useRouter();
  const userId = useSelector((state) => state.id_reducer.userId);
  console.log(userId)

  const [routineId, setRoutineId] = useLocalStorage('routineId', null)

  const deleteRoutine = async (id) => {
    const url = `http://localhost:8000/routine?routine_id=${id}`;
    await axios.delete(url).then((res) => {
      getRoutine();
      console.log(`${userId}의 루틴을 삭제했습니다`);
    });
  };

  const routineIdHandler = () => {
    dispatch(getCurRoutine(routine.id))
    router.push(`/workout/${userId}`)
  }


  return (
    <RoutineList>
      <RoutineItem
        onClick={routineIdHandler}
        id={routine.id}>
          <ItemContainer>
          <Image src={icon} width={80} height={80} alt='아이콘' />
          <RoutineTitle>{routine.name}</RoutineTitle>
          <RoutineTime>{routine.finished_time}분</RoutineTime>
          </ItemContainer>
      </RoutineItem>
      <ButtonContainer>
        <DeleteButton
          id={routine.id}
          onClick={(e) => deleteRoutine(e.target.id)}
        >
          삭제
        </DeleteButton>
      </ButtonContainer>
    </RoutineList>
  );
}
