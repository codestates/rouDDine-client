import styled from 'styled-components';
import Link from 'next/link';
import Cookies from 'js-cookie';
import SignUp from '../login&signup/signup';
import Login from '../login&signup/login';
import { useState } from 'react';
import router from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
  const accessToken = Cookies.get('accessToken');
  const [modalLogin, setModalLogin] = useState(false);
  const [modalSignup, setModalSignup] = useState(false);
  const [modalBuger, setModalBuger] = useState(false);

  return (
    <>
      <NavContainer>
        <Link href='/'>
          <div className='link logo'>로고</div>
        </Link>

        {modalLogin || modalSignup ? (
          <Overlay_modal
            onClick={() => {
              if (modalLogin) {
                setModalLogin(false);
                return;
              }
              if (modalSignup) {
                setModalSignup(false);
                return;
              }
            }}
          />
        ) : null}
        {modalLogin && <Login />}
        {modalSignup && <SignUp />}

        <ButtonContainer>
          {accessToken ? (
            <Link href='/Mypage'>
              <div className='link mypage'>마이페이지</div>
            </Link>
          ) : (
            <div className='link login' onClick={() => setModalLogin(true)}>
              로그인
            </div>
          )}
          {accessToken ? (
            <div
              className='link logout'
              onClick={() => {
                Cookies.remove('accessToken');
                router.push('/');
                //로그아웃시 랜딩페이지로
              }}
            >
              로그아웃
            </div>
          ) : (
            <div className='link signup' onClick={() => setModalSignup(true)}>
              회원가입
            </div>
          )}
          {modalBuger ? (
            <FontAwesomeIcon className='bars' icon={faTimes} onClick={() => setModalBuger(false)} />
          ) : (
            <FontAwesomeIcon className='bars' icon={faBars} onClick={() => setModalBuger(true)} />
          )}
        </ButtonContainer>

        {modalBuger ? (
          <BugerModal>
            <div>로고</div>
            <div>버튼</div>
            <div>버튼</div>
            <div>버튼</div>
          </BugerModal>
        ) : null}
      </NavContainer>
    </>
  );
}

const NavContainer = styled.div`
  display: flex;
  position: fixed;
  background-color: white;
  justify-content: space-between;
  height: 8vh;
  width: 100%;
  z-index: 103;
  box-shadow: 0 0 3px 1px rgb(0 0 0 / 10%);
  padding: 10px;
  .link {
    color: black;
    cursor: pointer;
    align-self: center;
    padding: 10px 20px 10px 20px;
  }
  .logo {
    margin-left: 20px;
    //로고 버튼
  }
  .mypage,
  .login {
    //로그인,마이페이지 버튼
    margin-right: 20px;
  }
  .modal {
    position: fixed;
  }
  .bars {
    display: none;
    cursor: pointer;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media all and (max-width: 1024px) {
    flex-direction: column;
    > .link {
      display: none;
    }
    .bars {
      display: block;
      font-size: 2.3rem;
      padding-right: 10px;
    }
  }
`;

const Overlay_modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.495);
  z-index: 99;
`;

const BugerModal = styled.div`
  //툴바 누르면 나오는 창
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: white;
  height: 0vh;
  transition: 0.3s ease-in-out;
  background: rgba(21, 39, 64, 0.9215686274509803);
  right: 0;
  top: 8vh;
  border: 3px solid red;
  > div {
    display: flex;
    border: 3px solid blue;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  @media all and (min-width: 1024px) {
    display: none;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    height: 100vh;
    width: 50%;
  }

  @media all and (max-width: 767px) {
    display: block;
    height: 100vh;
    width: 100%;
  }
`;
