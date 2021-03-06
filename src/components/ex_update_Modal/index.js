import axios from 'axios';
import styled from 'styled-components';
import React, { useState } from 'react';

function Modal({ setCurrentWorkouts, setModalOpen, modalOpen, workoutId }) {
  console.log('src/componenets/ex_upsdate_Modal의 콘솔로그');
  const [values, setValues] = useState({ name: '', set_number: '', minutes: '', seconds: '', rest_minutes: '', rest_seconds: '', memo: '' });
  const inputHandler = (e) => {
    //input value 핸들링 함수
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const updateWorkoutInfo = async (workoutId, values) => {
    const url = `${process.env.NEXT_PUBLIC_url}/testexercise`;
    let body = {
      workoutid: workoutId,
      name: values.name,
      memo: values.memo,
    };
    let set_time_min = values.minutes;
    let set_time_sec = values.seconds;
    let rest_time_min = values.rest_minutes;
    let rest_time_sec = values.rest_seconds;

    if (values.set_number !== '') {
      body.set_number = Number(values.set_number);
    }
    if (set_time_min !== '') {
      body.set_time_min = Number(set_time_min);
    }
    if (set_time_sec !== '') {
      body.set_time_sec = Number(set_time_sec);
    }
    if (rest_time_min !== '') {
      body.rest_time_min = Number(rest_time_min);
    }
    if (rest_time_sec !== '') {
      body.rest_time_sec = Number(rest_time_sec);
    }

    const res = await axios.patch(url, body, { withCredential: true });
    setModalOpen(false);
    setCurrentWorkouts(res.data.result);
  };

  return (
    <ModalSection modalOpen={modalOpen}>
      <div className='input_container'>
        <div>수정 하고싶은 부분을 수정해주세요 </div>
        <div className='workout_name'>
          <div>운동이름</div>
          <input
            name='name'
            defaultValue={'ㅋㅋㅋ'}
            onChange={(e) => {
              inputHandler(e);
            }}
          />
        </div>
        <div className='set_input'>
          <div>운동시간</div>
          <div>
            <input
              name='minutes'
              type='number'
              placeholder='분'
              min='0'
              onChange={(e) => {
                inputHandler(e);
              }}
            />
            <input
              name='seconds'
              type='number'
              placeholder='초'
              min='0'
              onChange={(e) => {
                inputHandler(e);
              }}
            />
            <input
              name='set_number'
              type='number'
              placeholder='세트'
              min='0'
              onChange={(e) => {
                inputHandler(e);
              }}
            />
          </div>
        </div>
        <div className='rest_input'>
          <div>휴식 시간</div>
          <div>
            <input
              name='rest_minutes'
              type='number'
              placeholder='분'
              min='0'
              onChange={(e) => {
                inputHandler(e);
              }}
            />
            <input
              name='rest_seconds'
              type='number'
              placeholder='초'
              min='0'
              onChange={(e) => {
                inputHandler(e);
              }}
            />
          </div>
        </div>
        <div className='input_memo'>
          <div>메모</div>
          <textarea
            name='memo'
            onChange={(e) => {
              inputHandler(e);
            }}
          />
        </div>
      </div>
      <ModalSaveBtn
        onClick={() => {
          updateWorkoutInfo(workoutId, values);
        }}
      >
        저장
      </ModalSaveBtn>
    </ModalSection>
  );
}

export default Modal;

export const ModalSection = styled.section`
  background-color: white;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 10px;
  margin: 10% 30%;
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 999;
  opacity: ${(props) => (props.modalOpen ? '100%' : '0')};
  top: ${(props) => (props.modalOpen ? '0' : '-1500%')};
  left: 20%;
  height: 580px;
  width: 400px;
  .input_container {
    display: flex;
    flex-direction: column;
    height: 70%;
    justify-content: space-around;
    input {
      border: 1px solid grey;
      border-radius: 3px;
      padding: 3px;
    }
    .workout_name {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      > div {
        color: grey;
        align-self: flex-start;
        font-size: 0.8rem;
        padding-bottom: 5px;
      }
      > input {
        width: 64%;
      }
    }
    .set_input {
      display: flex;
      flex-direction: column;
      > div {
        padding-bottom: 5px;
        font-size: 0.8rem;
        color: grey;
      }
      input {
        width: 40px;
        margin-right: 5px;
        :nth-child(3) {
          width: 50px;
        }
      }
    }
    .rest_input {
      display: flex;
      flex-direction: column;
      color: grey;
      > div {
        padding-bottom: 5px;
        font-size: 0.8rem;
      }
      input {
        width: 40px;
        margin-right: 5px;
      }
    }
    .input_memo {
      height: 30%;
      border-radius: 3px;
      > div {
        color: grey;
        font-size: 0.8rem;
        padding-bottom: 5px;
      }
      > textarea {
        width: 100%;
        height: 50%;
        resize: none;
      }
    }
  }
`;

export const ModalSaveBtn = styled.span`
  font-size: 0.2rem;
  cursor: pointer;
  padding: 5px;
  border: 2px solid #000035;
  background-color: #000035;
  color: #ffffff;
  font-size: 1rem;
`;
