import React from 'react'
import styled from 'styled-components'
import HeadInfo from '../components/HeadInfo';
import Nav from '../components/Nav'

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5% 40%;
`;

const LoginInput = styled.input`
  margin: 10px;
`;

const LoginButton = styled.button`

`;

export default function login() {
  return (
    <>
    <HeadInfo/>
    <Nav/>
    <LoginContainer>
      <LoginInput placeholder="email"/>
      <LoginInput placeholder="password"/>
      <LoginButton>로그인</LoginButton>
    </LoginContainer>
    </>
  )
}
