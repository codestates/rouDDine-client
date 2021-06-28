import styled from 'styled-components'
import exercise from '../img/exercise.jpg'
import mobile_exercise from '../img/mobile_exercise.jpg'
import using from '../video/video1.gif'
import Review from './ReviewData'
import "../App.css"

// import {Link} from 'react-router-dom'

const Container = styled.div`
  width: 1848px;
  height: 2772px;
  display: flex;
  flex-direction: column;
  // padding: 100px;
  margin-top: -10px;
  margin-left: -10px;
`;

const Nav = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 15%;
  padding-right: 15%;
  font-size: 1.4rem;
  color: white;
  background: navy;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.span`
  font-size: 2rem;
  padding: 10px;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LinkButton = styled.span`
  margin: 20px;
  justify-content: space-between;
`;

const Section1 = styled.div`
  margin-top: 90px;
  flex: 1 1 auto;
  background: #4665d9;
  padding-left: 200px;
  padding-right: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Container1 = styled.div`
  width: 30%
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  margin-right: 50px;
`;

const Title = styled.h1`
  margin-top: 40px;  
  font-size: 5.8rem;
  text-align: center;
`;

const MainButton1 = styled.button`
  align-items: center;
  width: 400px;
  height: 80px;
  font-size: 1.2rem;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
  color: navy;
  border-radius: 30px;
  border-right: solid 10px;
  border-left: none;
  border-top: none;
  border-bottom: solid 10px;
  margin: 50px 100px;
  background-color: #f3f5f7;
  text-align: center;
`;

const Subtitle = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
`;

const Container2 = styled.div`
  margin-top: 180px;
  width: 500px;
  height: 450px;
  background-image: url(${exercise})
`;

const Section2 = styled.div`
  background: #f3f5f7;
  flex: 4 1 auto;
  padding-left: 200px;
  padding-right: 200px;
  align-items: center;
  display: flex;
  flex-direction: row;
`;


const Container3 = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Box1 = styled.div`
  border: solid 5px #4665d9;
  border-radius: 30px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 800;
  color: #3f51b5;
  margin: 10px 200px 10px 30px;
  padding: 5px;
`;

const Box2 = styled.div`
  text-align: center;
  font-size: 2.5rem;
  padding: 10px;
  text-align: left;
  padding-left: 30px;
`;

const Box3 = styled.div`
  padding-left: 30px;
  padding-right: 50px;
`;

const Using = styled.div`
  height: 78%;
  background-color: #f3f5f7;
  flex: 100 1 auto;
  background-image: url(${using})
`;

const Section3 = styled.div`
  flex: 4 1 auto;
  background: #f8fcff;
  padding-left: 200px;
  padding-right: 200px;
  display: flex;
  flex-direction: column;
`;

const Container4 = styled.h2`
  margin: 30px 50px;
  text-align: center;
`;

const Container5 = styled.div`
  flex: 2 0 auto;
  display: flex;
`;

const Box4 = styled.span`
  width: 200px;
  flex: 1 0 auto;
  border: 1px solid black;
  margin: 20px;
`;

const Section4 = styled.div`
  flex: 1 1 auto;
  background: #4665d9;
  padding-left: 200px;
  padding-right: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container6 = styled.div`
  width: 600px;
  height: 400px;
  background-image: url(${mobile_exercise})
`;

const Container7 = styled.h2`
  margin: 30px 50px;
  text-align: center;
`;

const MainButton2 = styled.button`
  align-items: center;
  width: 400px;
  height: 80px;
  font-size: 1.2rem;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
  color: navy;
  border-radius: 30px;
  border-right: solid 10px;
  border-left: none;
  border-top: none;
  border-bottom: solid 10px;
  margin: 50px 100px;
  background-color: #f3f5f7;
  text-align: center;
`;

const Footer = styled.div`
  flex: 1 1 auto;
  color: white;
  background: navy;
  padding-left: 200px;
  padding-right: 200px;
  text-align: center;
`;

function Landing() {
  return (
    <Container>
      <Nav>
        <Logo>Routine</Logo>
        <LinkContainer>
          <LinkButton>로그인</LinkButton>
          <LinkButton>회원가입</LinkButton>
        </LinkContainer>
      </Nav>
      <Section1>
        <Container1>
          <Title>
            내 맘대로 나만의 <br></br>운동루틴 짜기!
          </Title>
          <Subtitle>
            세트 수, 세트 시간, 휴식까지 설정 가능한<br></br>
            완벽한 Customizing Routine Manager!<br></br>
            나만의 Routine으로 효율적으로 운동하자!
          </Subtitle>
          <MainButton1>나만의 루틴 만들러 가기</MainButton1>
        </Container1>        
        <Container2>
        </Container2>
      </Section1>
      <Section2>
        <Container3>
          <Box1>간단한 사용법</Box1>
          <Box2> 
            드래그 앤 드롭<br></br>
            방식으로 <br></br>
            간편하게!
          </Box2>
          <Box3>
            효율적인 운동을 위해서는 <br></br>
            운동시간과 휴식시간의 분배는 필수!<br></br>
            직접 짠 루틴을 실행시키면<br></br>
            타이머가 시작됩니다.<br></br>
          </Box3>
        </Container3>
        <Using url={using} playing/>
      </Section2>
      <Section3>
        <Container4>이미 많은 분들이 routine을 사용하고 있습니다.</Container4>
        <Container5>
          <Box4>{Review[0].name}<br></br> {Review[0].age}<br></br> {Review[0].score}<br></br> {Review[0].review}</Box4>
          <Box4>{Review[1].name}<br></br> {Review[1].age}<br></br> {Review[1].score}<br></br> {Review[1].review}</Box4>
          <Box4>{Review[2].name}<br></br> {Review[2].age}<br></br> {Review[2].score}<br></br> {Review[2].review}</Box4>
          <Box4>{Review[3].name}<br></br> {Review[3].age}<br></br> {Review[3].score}<br></br> {Review[3].review}</Box4>
        </Container5>
        <Container5>
          <Box4>{Review[0].name}<br></br> {Review[0].age}<br></br> {Review[0].score}<br></br> {Review[0].review}</Box4>
          <Box4>{Review[1].name}<br></br> {Review[1].age}<br></br> {Review[1].score}<br></br> {Review[1].review}</Box4>
          <Box4>{Review[2].name}<br></br> {Review[2].age}<br></br> {Review[2].score}<br></br> {Review[2].review}</Box4>
          <Box4>{Review[3].name}<br></br> {Review[3].age}<br></br> {Review[3].score}<br></br> {Review[3].review}</Box4>
        </Container5>
      </Section3>
      <Section4>
        <Container6></Container6>
        <Container7>언제, 어디서나 사용할 수 있게, 모바일에서도!</Container7>
        <MainButton2>나만의 루틴 생성하기</MainButton2>
      </Section4>
      <Footer>이승현 이건우 박지훈 곽운도</Footer>
    </Container>
  )
}

export default Landing;