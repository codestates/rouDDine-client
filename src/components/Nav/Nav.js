import styled from 'styled-components';
import Link from 'next/link';
import Cookies from 'js-cookie';

const NavContainer = styled.div`
  background-color: whitesmoke;
  display: flex;
  justify-content: space-between;
  top: 0;
  height: 60px;
  width: 100vw;
  padding: 10px;
  position: fixed;
  z-index: 2;
  /* box-shadow: 0 0 3px 1px rgb(0 0 0 / 10%); */
  > div {
    display: flex;
    margin: 0px 20px 0px 0px;
    justify-content: space-between;
  }
  .link {
    color: white;
    cursor: pointer;
    padding: 10px;
  }
`;

export default function Nav() {
  const accessToken = Cookies.get('accessToken');

  return (
    <>
      <NavContainer>
        <Link href='/'>
          <div className='link'>로고</div>
        </Link>

        <ButtonContainer>
          {accessToken ? (
            <Link href='/Mypage'>
              <div className='link'>마이페이지</div>
            </Link>
          ) : (
            <Link href='/login'>
              <div className='link'>로그인</div>
            </Link>
          )}
          {accessToken ? (
            <div onClick={() => Cookies.remove('accessToken')}>로그아웃</div>
          ) : (
            <Link href='/signup'>
              <div className='link'>회원가입</div>
            </Link>
          )}
        </ButtonContainer>
      </NavContainer>
    </>
  );
}
