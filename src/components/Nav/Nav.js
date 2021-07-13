import styled from 'styled-components';
import Link from 'next/link';
import Cookies from 'js-cookie';
import SignUp from '../login&signup/signup';
import Login from '../login&signup/login';
import { useState } from 'react';

export default function Nav() {
  const accessToken = Cookies.get('accessToken');
  const [modalLogin, setModalLogin] = useState(false);
  const [modalSignup, setModalSignup] = useState(false);

  return (
    <>
      <NavContainer>
      </NavContainer>
    </>
  );
}

const NavContainer = styled.div`
  position: absolute;
  background-color: white;
  display: flex;
  justify-content: space-between;
  height: 60px;
  width: 100vw;
  padding: 10px;
  position: fixed;
  z-index: 103;
  box-shadow: 0 0 3px 1px rgb(0 0 0 / 10%);
  > div {
    display: flex;
    margin: 0px 20px 0px 0px;
    justify-content: space-between;
  }
  .link {
    color: black;
    cursor: pointer;
    padding: 10px;
  }
  .modal {
    position: fixed;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
`;

const Overlay_modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.495);
  z-index: 99;
`;
