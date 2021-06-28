import styled from "styled-components";
import HeadInfo from '../components/HeadInfo'
import Nav from '../components/Nav'

let Body = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  padding: 7%;
  /* justify-content: space-between; */
`;

let Info = styled.div`
  display: flex;
  justify-content: space-around;
  div {
    font-size: 3rem;
  }
`;

let Time = styled.div`
  align-self: center;
  font-size: 15rem;
  margin: 5%;
`;

export default function timerpage() {
  return (
    <>
    <HeadInfo/>
    <Nav/>
    <Body>
      <Info>
        <div>루틴이름</div>
        <div>현재운동</div>
        <div>현재세트</div>
      </Info>
      <Time>00:00</Time>
    </Body>
    </>
  );
}
