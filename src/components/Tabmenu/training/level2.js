import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addWorkoutArray } from '../../../../redux/reducers/workout';
import { routineInfo } from '../../../../redux/reducers/routineInfo';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ItemContainer = styled.ul`
  background-color: #fce8f8;
  color: grey;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: NanumGothic-regular;
  font-weight: 300;
  margin-bottom: 5px;
  width: 100px;
  height: 50px;
  min-width: 95%;
  padding: 0 10px;
  border-radius: 8px;
<<<<<<< HEAD
  cursor: pointer;
  
  @media ( max-width: 768px ) {
    display:none;
  }
=======
  box-shadow: 4px 3px 2px 1px #fce8f8;
>>>>>>> 371e6abdde3c149ca6331929fce9506864452eaa

  &:hover {
    color: #000035;
  }
`;

<<<<<<< HEAD
const ItemTitle = styled.h4`
=======
const ItemTitle = styled.h4``;

const ItemList = styled.li`
  list-style: none;
>>>>>>> 371e6abdde3c149ca6331929fce9506864452eaa
  text-align: center;
`;

function List2({ getRoutine }) {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const getWorkout = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_url}/testexercise`, { withCredentials: true });
    const items = res.data.result;
    const curWorkout = items.filter((item) => item.category === '유산소운동' && item.default === true);
    setData(curWorkout);
  };

  useEffect(() => {
    getWorkout();
    console.log('@@@@@@');
  }, []);
  const routineId = useSelector((state) => state.routineInfo.id);

  const addWorkout = async (itemTitle) => {
    const url = `${process.env.NEXT_PUBLIC_url}/testexercise`;
    const body = {
      userid: 1,
      routine_id: routineId,
      name: itemTitle,
    };
    const res = await axios.post(url, body, { withCredentials: true });
    const data = res.data;

    getMyRoutine(routineId);
  };

  const getMyRoutine = async (routineId) => {
    const url = `${process.env.NEXT_PUBLIC_url}/testroutine?routine_id=${routineId}`;
    const res = await axios.get(url, { withCredentials: true });
    console.log(res.data);
    dispatch(routineInfo(res.data.id, res.data.name, res.data.tasks));
  };

  const newWorkoutHandler = (e) => {
    const itemTitle = e.target.parentElement.children[0].innerText;
    addWorkout(itemTitle);
  };

  return (
    <Container>
      {data.map((item) => (
        <ItemContainer 
        key={item.id} 
        name={item.name} 
        set_time={item.set_time} 
        rest_time={item.rest_time}
        onClick={(e) => {
          newWorkoutHandler(e);
        }}
        >

          <ItemTitle>{item.name}</ItemTitle>
<<<<<<< HEAD
          {/* <AddButton
=======
          {/* <img id={item.id} src={`${process.env.NEXT_PUBLIC_url}/${item.workoutimage}`}></img> */}
          {/* <ItemList>세트 시간 {item.set_time}</ItemList>
          <ItemList>휴식 시간 {item.rest_time}</ItemList>
          <ItemList>총 3세트</ItemList> */}
          <AddButton
            onClick={(e) => {
              newWorkoutHandler(e);
            }}
>>>>>>> 371e6abdde3c149ca6331929fce9506864452eaa
          >
            +
          </AddButton> */}
        </ItemContainer>
      ))}
    </Container>
  );
}

export default List2;
