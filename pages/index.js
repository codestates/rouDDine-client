import styled from "styled-components";
import Link from "next/link";
import HeadInfo from "../components/HeadInfo";
import Nav from "../components/Nav";

const MainContainaer = styled.div`
  /* margin: 5px; */
  height: 100%;
  width: 100%;
  /* background-color: black; */
`;

export default function Home() {
  return (
    <>
      <HeadInfo />
      <MainContainaer>
        <Nav />
        <div>아무것도 없지만 메인페이지입니다.</div>
      </MainContainaer>
    </>
  );
}
