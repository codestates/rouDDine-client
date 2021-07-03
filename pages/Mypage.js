import styled from "styled-components";
import Link from "next/link";
import HeadInfo from "../components/HeadInfo";
import Nav from "../components/Nav";

let Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5%;
`;

let Profile = styled.div`
  font-size: 3rem;
  margin: 2%;
  border: 1px solid black;
  text-align: center;
  padding: 3%;
`;

let Container = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 80%;
  padding: 1%;
  justify-content: space-around;
  div {
    border: 1px solid black;
    width: 100%;
    font-size: 2rem;
    text-align: center;
    padding: 2%;
    :nth-child(5) {
      :hover {
        background-color: grey;
        cursor: pointer;
      }
    }
  }
`;

export default function Mypage() {
  return (
    <>
      <HeadInfo />
      <Nav />
      <Body>
        <Profile>프로필 사진</Profile>
        <Container>
          <div>이름</div>
          <div>성별</div>
          <div>나이</div>
          <div>키 / 몸무게</div>
          <div>
            <Link href="/statistics">
              <a>루틴 달성 횟수(통계자료?)</a>
            </Link>
          </div>
        </Container>
      </Body>
    </>
  );
}
