import React from 'react';
import styled from 'styled-components';
import HeadInfo from '../src/components/HeadInfo';
import Nav from '../src/components/Nav';


const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 10em;
  > input,
  button {
    margin: 2em;
  }
`;

const LoginInput = styled.input`
  margin: 1em;
  padding: 0.5em;
  width: 20em;
  height: 3em;
  outline: none;
  font-size: large;
`;

const LoginButton = styled.button`
  height: 5em;
  width: 8em;
`;

export default function login() {
  return (
    <>
      <HeadInfo />
      <Nav />
      <LoginContainer>
        <LoginInput placeholder='email' />
        <LoginInput placeholder='password' />
        <LoginButton>로그인</LoginButton>
      </LoginContainer>
    </>
  );
}
