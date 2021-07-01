import styled from 'styled-components'
import Link from 'next/link'
import { loginAction, logoutAction } from '../reducers/login';
import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback } from 'react'


const NavContainer = styled.div`
  background-color: black;
  display: flex;
  justify-content: column;
  width: 100%;
`;

const Linked = styled.a`
  margin: 20px 10px;
  color: white;
  cursor: pointer;
`;

const LoginContainer = styled.div`
  display: flex;
`;


export default function Nav() {
  const dispatch = useDispatch(); // dispatch를 사용하기 쉽게 하는 hook

  const login = useSelector(state => state.login);

  const onClickLogin = useCallback(() => { // useCallback은 최적화를 위한 hook이다 이 앱에선 굳이 사용 안 해도 되는데 습관이 들면 좋기에 사용.
    dispatch( 
      loginAction()
    )}, []);

  const onClickLogout = useCallback(() => { // useCallback은 최적화를 위한 hook이다 이 앱에선 굳이 사용 안 해도 되는데 습관이 들면 좋기에 사용.
    dispatch( 
      logoutAction()
    )}, []);
  // console.log(login.id)


  return (
    <NavContainer>
      <Link href="/">
        <Linked>Home</Linked>
      </Link>
      <Link href="/routine/1">
        <Linked>Routine</Linked>
      </Link>
      <Link href="/workout/1">
        <Linked>workout</Linked>
      </Link>
      <Link href="/add">
        <Linked>addPage</Linked>
      </Link>
      <Link href="/Mypage">
        <Linked>Mypage</Linked>
      </Link>
      <Link href="/timerpage">
        <Linked>timer</Linked>
      </Link>
      <Link href="/statistics">
        <Linked>statistics</Linked>
      </Link>
      <Link href="/login">
        <Linked>login</Linked>
      </Link>
      <Link href="/signup">
        <Linked>signup</Linked>
      </Link>
      <LoginContainer> 
        <button onClick={onClickLogin}>로그인</button>
        <button onClick={onClickLogout}>로그아웃</button>
      </LoginContainer>
    </NavContainer>
  )
}
