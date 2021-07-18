import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import {addWorkoutArray} from '../../../../redux/reducers/workout'
import {routineInfo} from '../../../../redux/reducers/routineInfo'

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media ( max-width: 768px ) {
    display:none;
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
  cursor: pointer;
  
  @media ( max-width: 768px ) {
    display:none;
  }

  &:hover {
    color: #000035;
  }
`;

const ItemTitle = styled.h4`
  text-align: center;
`;


function List1({getRoutine}) {
  const dispatch = useDispatch();
  const [data, setData] = useState([])
  const [workouts, setWorkouts] = useState([])
  console.log(workouts);

  const getWorkout = async () => {
    const url = `${process.env.NEXT_PUBLIC_url}/testexercise`
    const res = await axios.get(url, { withCredentials: true })
    console.log(res.data.result);
    const items = res.data.result;
    const curWorkout = items.filter((item) => (
      item.category === '웨이트운동' && item.default === true
    ))
    console.log(curWorkout);
    setData(curWorkout)
  }

  useEffect(() => {
    getWorkout()
    console.log(workouts);
    console.log("@@@@@@");
  }, [])
  const routineId = useSelector((state) => state.routineInfo.id)

  
  const getMyRoutine = async(routineId) => {
    const url = `${process.env.NEXT_PUBLIC_url}/testroutine?routine_id=${routineId}`
    const res = await axios.get(url, { withCredentials: true });
    console.log(res.data);
    dispatch(routineInfo(res.data.id, res.data.name, res.data.tasks))
  }
  
  // useEffect(() => {
    //   getRoutine()
    // }, [])
    const addWorkout = async(itemTitle) => {
      const url = `${process.env.NEXT_PUBLIC_url}/testexercise`
      const body = {
        userid: 1,
        routine_id: routineId,
        name: itemTitle,
      }
      const res = await axios.post(url, body, { withCredentials: true })
      console.log(res);
      const data = res.data
  
      getMyRoutine(routineId) 
      // dispatch(addWorkoutArray(data))
    };
    
  const newWorkoutHandler = (e) => {
    const itemTitle = e.target.parentElement.children[0].innerText;
    // const itemSetTime = e.target.parentElement.children[1].innerText
    // const itemRestTime = e.target.parentElement.children[2].innerText
    addWorkout(itemTitle);
    // const text = e.target.parentElement.innerText
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
        </ItemContainer>
      ))}
    </Container>
  );
}

export default List1
