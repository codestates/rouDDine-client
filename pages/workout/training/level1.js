import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  max-height: 700px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ItemContainer = styled.ul`
  background: #2ac1bc;
  color: #f7ffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 4px 3px 2px 1px rgba(0, 0, 255, 0.2);

  &:hover {
    background-color: #f7ffff;
    color: #2ac1bc;
  }
`;

const ItemTitle = styled.h4``;

const ItemList = styled.li`
  list-style: none;
  text-align: center;
  font-size: 1.2em;
`;

const AddButton = styled.button`
  border-radius: 10px;
  color: gray;
  font-size: 1.3rem;
`;

function List2({ getRoutine }) {
  const [data, setData] = useState([]);
  console.log(data);

  const addWorkout = async (itemTitle) => {
    const url = `http://localhost:3000/exercise`;
    const body = {
      userid: 1,
      name: itemTitle,
    };
    const res = await axios.post(url, body, { withCredentials: true });
    console.log(res);
  };

  // useEffect(() => {
  //   getRoutine()
  // }, [])

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
        <ItemContainer key={item.id} name={item.name} set_time={item.set_time} rest_time={item.rest_time}>
          <ItemTitle>{item.name}</ItemTitle>
          {/* <ItemList>세트 시간 {item.set_time}</ItemList>
          <ItemList>휴식 시간 {item.rest_time}</ItemList>
          <ItemList>총 3세트</ItemList> */}
          <AddButton
            onClick={(e) => {
              newWorkoutHandler(e);
            }}
          >
            +
          </AddButton>
        </ItemContainer>
      ))}
    </Container>
  );
}

export default List2;
