import styled from 'styled-components';
import HeadInfo from '../src/components/HeadInfo/HeadInfo';

const MainContainaer = styled.div`
  height: 100%;
  width: 100%;
`;

export default function Home() {
  return (
    <>
      <HeadInfo />
      <MainContainaer>
        <>
          <div>안녕하세요</div>
        </>
      </MainContainaer>
    </>
  );
}
