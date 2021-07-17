import React from 'react';
import styled from 'styled-components';

const ReviewCardContainer = styled.li`
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 5px 8px 16px 0 rgba(31, 38, 135, 0.37);
  opacity: 0.85;
  list-style: none;
  height: 360px;
  max-width: 290px;
  min-width: 300px;
  padding: 10px 0;
  margin: 0 15px;
  background-color: white;
  color: #343a40;
  border-radius: 15px;


  @media (max-width: 1024px) {
    box-sizing: auto;
    min-width: 500px;
    height: auto;
    padding: 20px 0;
    margin: 10px 0;

  }
  /* margin: 0; */
  /* box-shadow: 2px 1px 5px #343a40; */
  

  @media (max-width: 768px) {
    box-sizing: auto;
    padding: 15px 35px;
    height: auto;
    min-width: 350px;
    margin: 10px 30px;
    box-sizing: border-box;
  }
  /* 🎖🎖🎖🎖🎖 */
  `;

const ReviewCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ReviewerBox = styled.div`
  font-family: Army_Medium;
  line-height: 160%;
  display: flex;
  flex-direction: column;
  /* justify-content: start; */
  align-items: left;
  flex: 2 0 auto;
  `;

const ReviewerName = styled.h3`
  text-align: left;
  margin: 0;
  font-family: Army_Medium;
  line-height: 160%;
`;

const ReviewScore = styled.h4`

`;

const IconSpan = styled.span`
  
`;

const ReviewCardMessage = styled.div`
  /* padding: 20px 5px; */
  font-family: NEXONLv1GothicLight;
  text-align: justify;
  line-height: 160%;
`;


function ReviewCard({ content }) {
  return (
    <ReviewCardContainer>
      <ReviewCardHeader>
        <ReviewerBox>
          <ReviewerName>{content.name}</ReviewerName>
          <ReviewScore>{content.score}</ReviewScore>
        </ReviewerBox>
        <IconSpan>{content.icon}</IconSpan>
      </ReviewCardHeader>
      <ReviewCardMessage>{content.message}</ReviewCardMessage>
    </ReviewCardContainer>
  );
}

export default ReviewCard;
