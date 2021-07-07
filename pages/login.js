import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import HeadInfo from '../src/components/HeadInfo';
import Nav from '../src/components/Nav';
import GoogleLogin from 'react-google-login';
import axios from "axios";
import {useDispatch} from 'react-redux';
import {loginUserAction} from '../redux/reducers/user_reducer'
import useLocalStorage from '../util/useLocalStorage'

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
  const dispatch = useDispatch();
  const [user, setUser] = useState(null)
  console.log(user)
  dispatch(loginUserAction(user))
  const [values, setValues] = useState({ email: "", password: "" });
  const [isLogin, setIsLogin] = useLocalStorage("isLogin", false);
  const [userInfo, setUserInfo] = useLocalStorage("userInfo", null)
  const inputHandler = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    const {name, value} = e.target;
    setValues({ ...values, [name]:value })
  }
  console.log(values)
  
  const loginHandler = async () => {
    const {email, password} =values;
    const url = 'http://localhost:3000/login'
    const body = {
      email : email,
      password : password,
      social : null //필수
    }
    try {
      await axios.post(url, body)
      .then((res) => {
        const {data, userinfo, message} = res.data;
        const token = data.accessToken
        console.log(userinfo)
        if(message) {
          console.log(message)
          setIsLogin(true)
          setUserInfo(userinfo)
          console.log(isLogin)
          return;
        }
        console.log(token)
        console.log(userInfo)
        
        handleSign(token, data, true);
        // window.location.href=`http://localhost:4000/routine/1`
      });
    } catch (e) {
      alert("오류나써요")
    }
  };
  
  const googlelogin = (result) => {
    console.log(result)
  }
  
  // useEffect(() => {
    //   dispatch(loginUserAction())
    // })
    const handlegoogleLogin = async (result) => {
      try {
        await axios
        .post(
          `http://localhost:3000/login`,
          {
            email: result.profileObj.email,
            username: result.profileObj.name,
            social: 'google',
            socialid: result.profileObj.googleId,
            profileimage: result.profileObj.imageUrl
          },
          {
            withCredentials: true
          }
          )
          .then(res => {
            console.log(res.data.userinfo)
            if (res.status === 200) {
              alert("로그인에 성공했습니다.");
              setUser(res.data.userinfo)
              // dispatch(loginUserAction(res.data.userinfo))
              //handleClickClose();
              //localStorage.setItem("tech_auth", res.data.result.access_token); //받은 토큰 localStorage에 저장
              //localStorage.setItem("username", res.data.response.username); // 로그인한 유저 localStorage에 저장
              window.location.reload(); //화면 재렌더링
            }
            else if(res.status === 201){
              alert("회원가입에 성공했습니다.");
              window.location.reload(); //화면 재렌더링
            }
          });
    } catch {
      alert("이메일 또는 비밀번호를 잘못 입력하셨습니다.\n 다시 시도해주세요");
    }
  };
  const handleClickClose = () => {
    props.onClickLogin(false);
  };

  return (
    <>
      <HeadInfo />
      <Nav />
      <LoginContainer>
        <LoginInput value={values.email} type="email" name="email" placeholder='email' onChange={inputHandler}/>
        <LoginInput type="password" name="password" placeholder='password' input type="password" onChange={inputHandler}/>
        <LoginButton onClick={loginHandler}>로그인</LoginButton>
        <GoogleLogin
          clientId = {`982420892016-vr0bn99ieuuaoucnhc5e2qiarg50mh2e.apps.googleusercontent.com`}
          
          onSuccess={result => handlegoogleLogin(result)}
          onFailure={result => console.log(result)}
          cookiePolicy = 'single_host_origin'
          />
      </LoginContainer>
    </>
  );
}