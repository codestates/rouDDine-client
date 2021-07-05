import styled from 'styled-components';
import HeadInfo from '../src/components/HeadInfo';
import Nav from '../src/components/Nav';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../redux/reducers/toggle';

const MainContainaer = styled.div`
  height: 100%;
  width: 100%;
`;

export default function Home() {
  const dispatch = useDispatch(); // dispatch를 사용하기 쉽게 하는 hook
  // const count = useSelector(state => state.count);
  // const toggle = useSelector(state => state.toggle);

  // store의 state를 불러오는 hook
  // store의 state 중에서 count의 state를 불러온다.

  const onClickToggle = useCallback(() => {
    // useCallback은 최적화를 위한 hook이다 이 앱에선 굳이 사용 안 해도 되는데 습관이 들면 좋기에 사용.
    dispatch(toggleModal());
  }, []);

  // console.log(toggle)
  return (
    <>
      <HeadInfo />
      <MainContainaer>
        <Nav />
        <>
          <div>
            {' '}
            토글
            <button onClick={onClickToggle}>토글</button>
          </div>
        </>
      </MainContainaer>
    </>
  );
}
