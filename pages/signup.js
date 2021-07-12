import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function SignUp() {
  const router = useRouter();
  //react-router-dom의 history 함수와 같은 기능
  const [userInfo, setUserInfo] = useState({});
  const [msg, setMsg] = useState('');
  const OnChange = (e) => {
    const { value, name } = e.target;
    //input값 저장
    setUserInfo({ ...userInfo, [name]: value });
  };
  const OnClickSignUp = (userInfo) => {
    if (userInfo) {
      const { username, email, password, pwdConfirm } = userInfo;
      //입력정보
      if (!username || !email || !password || !pwdConfirm) {
        return setMsg('정보를 모두 입력하세요');
      }
      if (!email.includes('@')) {
        return setMsg('이메일 주소에 `@`가 있는지 확인해주세요');
      }
      if (password !== pwdConfirm) {
        return setMsg('두 비밀번호가 일치하는지 확인하세요');
      }
      console.log(userInfo);
      console.log(username, email, password);
      axios
        .post(
          'http://localhost:8000/user',
          { username, email, password, social: null }, //social: null로 필수
          { withCredentials: true }
        )
        .then(() => router.push('/login'))
        .catch(() => setMsg('이미 존재하는 이메일입니다'));
    } else {
      console.log('안됨');
    }
  };

  return (
    <>
      <SignUpContainer>
        <SignUpInput placeholder='name' name='username' onChange={(e) => OnChange(e)} />
        <SignUpInput placeholder='email' name='email' onChange={(e) => OnChange(e)} />
        <SignUpInput placeholder='password' name='password' input type='password' onChange={(e) => OnChange(e)} />
        <SignUpInput placeholder='confirm password' name='pwdConfirm' input type='password' onChange={(e) => OnChange(e)} />
        {msg ? <Message>{msg}</Message> : <div />}
        <SignUpButton onClick={() => OnClickSignUp(userInfo)}>회원가입</SignUpButton>
      </SignUpContainer>
    </>
  );
}

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  div:nth-child(5) {
    width: 20em;
    padding: 0.5em;
    text-align: center;
    font-size: large;
  }
`;

const SignUpInput = styled.input`
  width: 20em;
  padding: 0.5em;
  margin: 0.5em;
  outline: none;
  font-size: large;
`;

const SignUpButton = styled.div`
  font-size: large;
  padding: 0.5em;
  border: 1px solid black;
  border-radius: 5px;
  :hover {
    cursor: pointer;
  }
`;
