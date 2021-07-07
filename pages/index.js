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
  const dispatch = useDispatch();  
  const onClickToggle = useCallback(() => {
    dispatch(toggleModal());
  }, []);
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
