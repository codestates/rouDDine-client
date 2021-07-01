import React from 'react'
import styled from 'styled-components'
import HeadInfo from '../components/HeadInfo';
import Nav from '../components/Nav'


const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5% 40%;
`;

const SignUpInput = styled.input`
  margin: 10px;
`;

const SignUpButton = styled.button`

`;

export default function SignUp() {
  return (
    <>
    <HeadInfo/>
    <Nav/>
    <SignUpContainer>
      <SignUpInput placeholder="email"/>
      <SignUpInput placeholder="password"/>
      <SignUpInput placeholder="confirm password"/>
      <SignUpInput placeholder="name"/>
      <SignUpInput placeholder="age"/>
      <SignUpInput placeholder="body info"/>
      <SignUpButton>회원가입</SignUpButton>
    </SignUpContainer>
    </>
  )
}
