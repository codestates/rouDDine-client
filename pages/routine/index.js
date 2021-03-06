import axios from 'axios';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

function Routine({ data }) {
  const router = useRouter();
  const [routines, setRoutines] = useState(data);

  useEffect(() => {
    getRouitne();
  }, []);

  const getRouitne = async () => {
    const url = `${process.env.NEXT_PUBLIC_url}/testroutine`;
    const res = await axios.get(url, { withCredentials: true });
    setRoutines(res.data);
  };

  const addRoutine = async () => {
    const url = `${process.env.NEXT_PUBLIC_url}/testroutine`;
    const res = await axios.post(url, null, { withCredentials: true });
    console.log(res);
    getRouitne();
  };

  const deleteRoutine = async (e) => {
    const url = `${process.env.NEXT_PUBLIC_url}/testroutine?routine_id=${e.target.id}`;
    await axios.delete(url);
    getRouitne();
  };

  return (
    <>
      <RoutinePageHeader></RoutinePageHeader>
      <RoutineSection>
        {routines &&
          routines.map((routine, index) => (
            <>
              <RoutineContainer key={index}>
                <img src={`${process.env.NEXT_PUBLIC_url}/${routine.routineimage}`}></img>
                <RoutineItem id={routine.id}>
                  <RoutineTitle>{routine.name}</RoutineTitle>
                </RoutineItem>
                <ButtonContainer>
                  <Button id={routine.id} className='delete_btn' onClick={() => router.push(`/routine/${routine.id}`)}>
                    선택
                  </Button>
                  <Button id={routine.id} className='delete_btn' onClick={(e) => deleteRoutine(e)}>
                    삭제
                  </Button>
                </ButtonContainer>
              </RoutineContainer>
            </>
          ))}
        <AddRoutineButton
          onClick={() => {
            addRoutine();
          }}
        >
          +
        </AddRoutineButton>
      </RoutineSection>
    </>
  );
}

export default Routine;

export async function getStaticProps(ctx) {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_url}/testroutine`, { withCredentials: true });
  const data = res.data;
  return {
    props: {
      data: data,
    },
  };
}

const RoutineSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const AddRoutineButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #000036;
  color: #ffffff;
  font-size: 2rem;
  position: fixed;
  right: 2%;
  bottom: 5%;
  cursor: pointer;
  :hover {
    font-size: 2.4rem;
    text-shadow: 1rem;
  }
`;

const RoutinePageHeader = styled.div`
  padding: 50px;
`;

const RoutineContainer = styled.ul`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 5%;
  margin: 30px;
  cursor: pointer;
  img {
    height: 150px;
    width: 150px;
  }
`;

const RoutineItem = styled.div`
  padding: 0 5px;
  list-style: none;
  margin: 5px;
  border-radius: 15px;
  font-size: 1rem;
  vertical-align: middle;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .delete_btn {
    position: absolute;
    align-self: flex-end;
    margin: 0px 0px 130px;
  }
`;

const RoutineTitle = styled.h2`
  width: 250px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  width: 120px;
  height: 45px;
  text-align: center;
  font-size: 1.2rem;
  padding: 10px 0;
  margin: 0 3px;
  font-family: GmarketSansTTFBold;
  background-color: #000035;
  border: none;
  color: #ffffff;
  cursor: pointer;
  :hover {
    background-color: #d5d5d5;
    color: #464646;
    opacity: 0.7;
  }
`;
