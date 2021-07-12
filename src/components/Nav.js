import styled from 'styled-components';
import Link from 'next/link';
import { loginUser1Action, loginUser2Action, loginUser3Action, logoutAction } from '../../redux/reducers/id_reducer';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';

const NavContainer = styled.div`
  background-color: black;
  display: flex;
  justify-content: start;
  width: 100%;
  flex-wrap: wrap;
`;

const Linked = styled.a`
  margin: 25px 20px;
  color: white;
  cursor: pointer;
`;

const LoginContainer = styled.div`
  display: flex;
  margin: 5px;
  button {
    margin: 5px;
    cursor: pointer;
  }
`;

export default function Nav() {
  const dispatch = useDispatch(); // dispatch를 사용하기 쉽게 하는 hook
  const onClickLogout = useCallback(() => {
    // useCallback은 최적화를 위한 hook이다 이 앱에선 굳이 사용 안 해도 되는데 습관이 들면 좋기에 사용.
    console.log(`로그아웃`);
    dispatch(logoutAction());
  }, []);

  return (
    <>
      <NavContainer>
        <Link href='/'>
          <Linked>Home</Linked>
        </Link>
        <Link href='/routine/1'>
          <Linked>Routine</Linked>
        </Link>
        <Link href='/workout/1'>
          <Linked>workout</Linked>
        </Link>
        <Link href='/add'>
          <Linked>addPage</Linked>
        </Link>
        <Link href='/Mypage'>
          <Linked>Mypage</Linked>
        </Link>
        <Link href='/timerpage'>
          <Linked>timer</Linked>
        </Link>
        <Link href='/statistics'>
          <Linked>statistics</Linked>
        </Link>
        <Link href='/login'>
          <Linked>login</Linked>
        </Link>
        <Link href='/signup'>
          <Linked>signup</Linked>
        </Link>
      </NavContainer>
      <LoginContainer>
        <button onClick={onClickLogout}>로그아웃</button>
      </LoginContainer>
    </>
  );
}
