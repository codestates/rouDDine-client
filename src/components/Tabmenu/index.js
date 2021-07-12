import React, { useState } from 'react'
import styled from 'styled-components'
import List1 from '../../../pages/workout/training/level1'
import List2 from '../../../pages/workout/training/level2'
import List3 from '../../../pages/workout/training/level3'


const Container = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  height: 500x;
  position: absolute;
  left: 40px;
`;

const Button = styled.ul`
  display: flex;
  justify-content: center;
  padding-left: 0;
  margin: 0 15px;
  width: 300px;
  align-items: stretch;
`;

const List = styled.li`
  border: 1px solid lightgrey;
  list-style: none;
  padding: 0 25px;
  :hover {
    background-color: rgba(0, 0, 255, .2);
    border: 0;
  }
`;

const Contents = styled.div`
`;

const First = styled.div`
  padding: 0 5px;
  width: 300px;
  height: 500px;
  overflow-y: auto;
  margin: 0 15px;

`;
const Second = styled.div`
  padding: 0 5px;
  width: 300px;
  height: 500px;
  overflow-y: auto;
  margin: 0 15px;
`;

const Third = styled.div`
  padding: 0 5px;
  width: 300px;
  height: 500px;
  overflow-y: auto;
  margin: 0 15px;
`;

function Tabmenu() {
  const [menuNum, setMenuNum] = useState(0)
  const clickHandler = (id) => {
    setMenuNum(id)
    console.log(menuNum)
  }
  
  const arr = ["근력향상", "지구력향상", "휴식"]
  
  const obj = {
    0: <First><List1></List1></First>,
    1: <Second><List2></List2></Second>,
    2: <Third><List3></List3></Third>
  }
  
  return (
    <Container>
      <Contents>
        <Button>
          {arr.map((num, idx) => (
            <List menuNum={menuNum} key={idx} onClick={()=>{clickHandler(idx)}}>{num}</List>
            ))}
        </Button>
        {obj[menuNum]}
      </Contents>
    </Container>
  )
}

export default Tabmenu