import styled from 'styled-components';
import Link from 'next/link';
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

  const userId = useSelector((state) => state.userId);

  const onClickLogin1 = useCallback(() => {
    // useCallback은 최적화를 위한 hook이다 이 앱에선 굳이 사용 안 해도 되는데 습관이 들면 좋기에 사용.
    console.log(`유저1 로그인`);
    dispatch(loginUser1Action());
  }, []);

  const onClickLogin2 = useCallback(() => {
    // useCallback은 최적화를 위한 hook이다 이 앱에선 굳이 사용 안 해도 되는데 습관이 들면 좋기에 사용.
    console.log(`유저5 로그인`);
    dispatch(loginUser2Action());
  }, []);

  const onClickLogin3 = useCallback(() => {
    // useCallback은 최적화를 위한 hook이다 이 앱에선 굳이 사용 안 해도 되는데 습관이 들면 좋기에 사용.
    console.log(`유저6 로그인`);
    dispatch(loginUser3Action());
  }, []);

  const onClickLogout = useCallback(() => {
    // useCallback은 최적화를 위한 hook이다 이 앱에선 굳이 사용 안 해도 되는데 습관이 들면 좋기에 사용.
    console.log(`로그아웃`);
    dispatch(logoutAction());
  }, []);
  // console.log(login.id)
  
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
    </>
  )
}
