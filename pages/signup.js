import React from "react";
import styled from "styled-components";
import HeadInfo from "../components/HeadInfo";
import Nav from "../components/Nav";

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 5em 0em 0em 0em;
  height: 60vh;
`;

const SignUpInput = styled.input`
  width: 20em;
  padding: 0.5em;
  margin: 0.5em;
  outline: none;
  font-size: large;
`;

const SignUpButton = styled.button`
  font-size: large;
  padding: 0.5em;
`;

export default function SignUp() {
  return (
    <>
      <HeadInfo />
      <Nav />
      <SignUpContainer>
        <SignUpInput placeholder="email" />
        <SignUpInput placeholder="password" />
        <SignUpInput placeholder="confirm password" />
        <SignUpInput placeholder="name" />
        <SignUpInput placeholder="age" />
        <SignUpInput placeholder="body info" />
        <SignUpButton>회원가입</SignUpButton>
      </SignUpContainer>
    </>
  );
}
