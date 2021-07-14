import styled from 'styled-components'
import Image from 'next/image'
import Nav from '../src/components/Nav/Nav'
import ReviewContainer from '../src/components/ReviewCard/Container'
import ReviewCard from '../src/components/ReviewCard/Card'
// import {Link} from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Logo = styled.span`
  font-size: 2rem;
  padding: 10px;
`;

const Section = styled.div`
  color: #343a40;
  background-color: #ffffff;
  margin-top: 60px;
  padding: 100px 120px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  div {
    margin: 0 auto;
    
    h2 {
      text-align: center;
      font-family: NanumGothic-ExtraBold;
    }

    article {
      text-align: center;
      font-family: InkLipquid;
      font-size: 1.5rem;
      margin-bottom: 50px;
    }

  }
  @media ( max-width: 768px ) {
    padding: 10px 0px;
  }
  `;


const Footer = styled.footer`
  height: 20vh;
  background-color: #000036;
  display: flex;
  flex-direction: row;
`;



function App() {
  return (
    <>
      <Container>
        <Section>
          <div>
            <h2>rouDDine을 사용한 많은 분들이 목표 달성에 성공하셨습니다.</h2>
            <article>하루의 시작도, 하루의 끝도 우리에겐 너무나 소중하니까, 정해진 시간 안에 최고의 효율을 경험해 보세요! 당신도 할 수 있습니다!</article>
          </div>
          <ReviewContainer>
          </ReviewContainer>
        </Section>
      </Container>
      <Footer>
      </Footer>
    </>
  )
}

export default App;
