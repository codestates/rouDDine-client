import styled from 'styled-components';
import Image from 'next/image'

const MainContainaer = styled.div`
  height: 100%;
  width: 100%;
`;

export default function Home() {
  return (
    <>
      <MainContainaer>
        <>
          <div>안녕하세요</div>
        </>
      </MainContainaer>
    </>
  )
}
