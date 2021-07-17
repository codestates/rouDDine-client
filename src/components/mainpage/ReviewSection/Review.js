import React from 'react'
import styled from 'styled-components'
import ReviewCard from './ReviewCard/Card'
import ReviewContainer from './ReviewCard/Container'

const ReviewSection = styled.div`
  color: #343a40;
  background-color: #ffffff;
  margin-top: 60px;
  /* padding: 100px 120px; */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;

  div {
    /* margin: 0 auto; */
    padding: 0 30px;

    h2 {
      text-align: center;
      font-size: 2rem;
      font-family: Army_Bold;
    }

    article {
      text-align: center;
      font-family: NEXONLv1GothicLight;
      /* font-family: NEXONLv1GothicRegular; */
      font-size: 1.5rem;
      margin-bottom: 50px;
    }
  }

  @media (max-width: 1024px) {

    div {

      h2 {
      }

      article {
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0 20px;

    div {
      padding: 0;

      h2 {
        font-size: 1.7rem
      }

      article {
        display: none;
      }
    }
  }
`;


function Review() {
  return (
    <ReviewSection>
      <div>
        <h2>rouDDine을 사용한 많은 분들이 목표 달성에 성공하셨습니다.</h2>
        <article>하루의 시작도, 하루의 끝도 우리에겐 너무나 소중하니까.<br/>
        정해진 시간 안에 최고의 효율을 경험해 보세요. <br/>당신도 할 수 있습니다!</article>
      </div>
      <ReviewContainer></ReviewContainer>
    </ReviewSection>
  )
}

export default Review
