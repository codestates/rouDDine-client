import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import HeadInfo from '../src/components/HeadInfo';
import Nav from '../src/components/Nav';
import axios from 'axios';

let imageUrl = '';

let Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5%;
`;

let Profile = styled.div`
  font-size: 3rem;
  margin: 2%;
  border: 1px solid black;
  text-align: center;
  padding: 3%;
`;

let Container = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 80%;
  padding: 1%;
  justify-content: space-around;
  div {
    border: 1px solid black;
    width: 100%;
    font-size: 2rem;
    text-align: center;
    padding: 2%;
    :nth-child(5) {
      :hover {
        background-color: grey;
        cursor: pointer;
      }
    }
  }
`;

const LinkDiv = styled(Link)`
  border: 3px solid red;
`;

const MyPage = () => {
  const [img, setImg] = useState('');
  const [userInfo, setuser] = useState({});

  const [username, setUsername] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');

  const getMyInfo = () => {
    axios
      .get(`http://localhost:3000/user?user_id=24`, { withCredentials: true }) //경로 나중에 환경변수로 관리하기 / userid본인에 맞게 수정하기
      .then((res) => {
        if (res.status === 200) {
          let defaultpath = 'http://localhost:3000/defaultimage.png'; //서버에 uploadedfile, defaultimage있어야함
          setuser(res.data);
          if (res.data.profileimage === null) {
            setImg(defaultpath);
          } else {
            setImg(res.data.profileimage);
          }
        } else {
          alert('잘못된 시도.');
        }
      })
      .catch((err) => {
        alert('예상치 못한 오류가 발생했습니다. \n 잠시 후 다시 시도해주세요.');
      });
  };

  useEffect(() => {
    getMyInfo();
    console.log('@@@@');
  }, []);

  const handleUsernameInputValue = (key) => (e) => {
    setUsername({ [key]: e.target.value });
    console.log('name수정');
  };
  const handleGenderInputValue = (key) => (e) => {
    setGender({ [key]: e.target.value });
  };
  const handleHeightInputValue = (key) => (e) => {
    setHeight({ [key]: e.target.value });
  };
  const handleWeightInputValue = (key) => (e) => {
    setWeight({ [key]: e.target.value });
  };
  const handleAgeInputValue = (key) => (e) => {
    setAge({ [key]: e.target.value });
  };

  const handleModify = async () => {
    console.log('클릭');
    try {
      let req = {
        user_id: 1,
        username: username.username,
        gender: gender.gender,
        height: height.height,
        weigt: weight.weight,
        age: age.age,
      };
      console.log(req);
      await axios.patch(`http://localhost:3000/user`, req).then((res) => {
        if (res.status === 200) {
          alert('회원 정보 수정이 완료되었습니다.');
          //window.location.reload();
        }
      });
    } catch (err) {
      console.log(err);
      alert('예상치 못한 에러가 발생했습니다.\n 잠시 후 다시 시도해주세요.');
    }
  };

  return (
    <>
      <HeadInfo />
      <Nav />
      <Body>
        <Container>
          <div className='profileimage'>
            <img src={img} width='120px'></img>
          </div>
          <span>기본정보</span>
          <div className='profile-group profile-group-email'>
            <span>이메일 : {userInfo.email} </span>
          </div>
          <div>
            <span>
              닉네임{' '}
              <input
                type='text'
                defaultValue={userInfo.username || ''}
                onChange={handleUsernameInputValue('username')}
              />
            </span>
          </div>
          <div>
            <span>
              성별{' '}
              <input
                type='text'
                defaultValue={userInfo.gender}
                onChange={handleGenderInputValue('gender')}
              />
            </span>
          </div>
          <div>
            <span>
              나이{' '}
              <input
                type='text'
                defaultValue={userInfo.age}
                onChange={handleAgeInputValue('age')}
              />
            </span>
          </div>
          <div>
            <span>
              키{' '}
              <input
                type='text'
                defaultValue={userInfo.height}
                onChange={handleHeightInputValue('height')}
              />
            </span>
          </div>
          <div>
            <span>
              몸무게{' '}
              <input
                type='text'
                defaultValue={userInfo.weigt}
                onChange={handleWeightInputValue('weight')}
              />
            </span>
          </div>
          <button
            className='btn-modify btn-modify-profile'
            type='submit'
            onClick={handleModify}
          >
            저장
          </button>
          <LinkDiv href='/statistics'>
            <div>통계</div>
          </LinkDiv>
        </Container>
      </Body>
    </>
  );
};
export default MyPage;
