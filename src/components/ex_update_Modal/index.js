import styled from 'styled-components'
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {ModalOpenAction} from '../../../redux/reducers/modal'
function Modal({isOpen, id, name}) {
  // console.log("id: ",id, "name: ", name);

  const dispatch = useDispatch();

  return (
    <ModalSection isOpen={isOpen}>
      <ul>
        <li>
          <input placeholder="운동 이름"/>
        </li>
        <li>
          <input placeholder="세트"/>
        </li>
        <li>
          <input placeholder="운동시간"/>
        </li>
        <li>
          <input placeholder="휴식시간"/>
        </li>
      </ul>
      <ModalSaveBtn onClick={()=>{dispatch(ModalOpenAction())}}>저장</ModalSaveBtn>
    </ModalSection>
  )
}

export default Modal;


export const ModalContainer = styled.section`
  height: 20vh;
  width: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: rgba(0, 0, 0, 0.8); */
  position: fixed;

`

export const ModalSection = styled.section`
  background: rgba( 255, 255, 255, 0.60 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  -webkit-backdrop-filter: blur( 12.0px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  position: absolute;
  display: flex;
  justify-content: space-between;
  z-index: 999;
  opacity: ${(props) => (props.isOpen ? "100%" : "0")};
  top: ${(props) => (props.isOpen ? "0" : "-100%")};
  height: 20vh;
  right: 100px;
  top: 50px;
  width: 20vw;
  flex-direction: column;

  li {
    list-style: none;
  }
/* 
  @media screen and (max-width: 768px) {
    min-width: 80%;
  }

  @media screen and (min-width: 768px) and (max-width: 1280px) {
    width: 50%;
  } */
`;

export const ModalSaveBtn = styled.span`
  font-size: 0.2rem;
`;
