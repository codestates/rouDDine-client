import styled from 'styled-components'
import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {ModalOpenAction} from '../../../redux/reducers/modal'
import {workoutInfo} from '../../../redux/reducers/workoutInfo'
import {routineInfo} from '../../../redux/reducers/routineInfo'

import axios from 'axios'

function Modal({setModalOpen, modalOpen, id, name}) {
  // console.log("id: ",id, "name: ", name);
  const routineId = useSelector((state) => state.routineInfo.id)
  const dispatch = useDispatch();
  // const routineId = 11;
  const workoutId = useSelector((state) => state.workoutInfo.id)
  console.log(workoutId);
  console.log(routineId);
  const [values, setValues] = useState({ name: '', set_number: '', minutes: '', seconds: '', rest_minutes: '', rest_seconds: '', memo: '' });
  const inputHandler = (e) => {
    //input value 핸들링 함수
    console.log(e);
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  console.log(values);
  


  const updateWorkoutInfo = async(workoutId, values) => {
    console.log("요청");
    const url = `http://localhost:3000/testexercise`
    const body = {
      workoutid : workoutId,
      name : values.name,
      set_number: values.set_number,
      set_time: (values.minutes * 6) + (values.seconds),
      rest_time: (values.rest_minutes * 6) + (values.rest_seconds),
      memo: values.memo
    }
    const res = await axios.patch(url, body, {withCredentials: true})
    console.log(res);
    getMyRoutine(routineId)
  }

  const getMyRoutine = async(routineId) => {
    const url = `http://localhost:3000/testroutine?routine_id=${routineId}`
    const res = await axios.get(url, { withCredentials: true });
    console.log(res.data);
    dispatch(routineInfo(res.data.id, res.data.name, res.data.tasks))
  }

  useEffect(() => {
    getMyRoutine(routineId)
  }, [])

  

  return (
    <ModalSection modalOpen={modalOpen}>
      <ul>
        <li>
          <input name="name" placeholder="운동 이름" onChange={(e)=>{inputHandler(e)}}/>
        </li>
        <li>
          <input name="set_number" type="number" placeholder="세트" onChange={(e)=>{inputHandler(e)}}/>
        </li>
        <li>
          <input name="minutes" type="number" placeholder="운동시간(분)" onChange={(e)=>{inputHandler(e)}}/>
        </li>
        <li>
          <input name="seconds" type="number" placeholder="운동시간(초)" onChange={(e)=>{inputHandler(e)}}/>
        </li>
        <li>
          <input name="rest_minutes" type="number" placeholder="휴식시간(분)" onChange={(e)=>{inputHandler(e)}}/>
        </li>
        <li>
          <input name="rest_seconds" type="number" placeholder="휴식시간(초)" onChange={(e)=>{inputHandler(e)}}/>
        </li>
        <li>
          <input name="memo" placeholder="메모" onChange={(e)=>{inputHandler(e)}}/>
        </li>
      </ul>
      <ModalSaveBtn 
      onClick={()=>{updateWorkoutInfo(workoutId, values)}}
      onClick={()=>{setModalOpen(!modalOpen)}}
      >
        저장</ModalSaveBtn>
    </ModalSection>
  )
}

export default Modal;


export const ModalContainer = styled.section`
  height: 40vh;
  width: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: rgba(0, 0, 0, 0.8); */
  position: fixed;

`

export const ModalSection = styled.section`
  background: rgba( 255, 255, 255, 0.60 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  -webkit-backdrop-filter: blur( 12.0px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  position: absolute;
  display: flex;
  justify-content: space-between;
  z-index: 999;
  opacity: ${(props) => (props.modalOpen ? "100%" : "0")};
  top: ${(props) => (props.modalOpen ? "0" : "-100%")};
  height: 40vh;
  /* right: 100px;
  top: 50px; */
  width: 20vw;
  flex-direction: column;

  li {
    list-style: none;
  }
/* 
  @media screen and (max-width: 768px) {
    min-width: 80%;
  }

  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 50%;
  } */
`;

export const ModalSaveBtn = styled.span`
  font-size: 0.2rem;
  cursor: pointer;
  padding: 5px;
`;