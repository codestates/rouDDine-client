import styled from 'styled-components'
import Image from 'next/image'
import Nav from '../src/components/Nav/Nav'
import ReviewContainer from '../src/components/ReviewCard/Container'
import ReviewCard from '../src/components/ReviewCard/Card'
import WorkoutVideo from '../src/components/video';
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

const MainSection = styled.div`
  height: 80vh;
  margin-top: 10vh;
  font-family: NanumGothic-ExtraBold;
  display: flex;
  flex: row;
  justify-content: center;
  max-width: 100%;
  color: #000036;
  padding: 40px;
`;


const MainArticle = styled.article`
  display: flex;
  flex-direction: row;
`;

const TitleStrong = styled.strong`
  font-size: 10rem;
`;

const TitleWrapper = styled.div`

`;
//   article {
//     display: flex;
//     flex-direction: row;

//     strong {
//       font-size: 10rem;

//       div{
//         p {
//           font-size: 4rem;
//         }

//         strong{
//           font-size: 6rem;
//         }
//       }
//     }
//   }
// `;

const MainPicture = styled(Image)`
  min-width: 40vw;
`;

const UsingSection = styled.div`
  height: 80vh;
  background-color: #000036;
  max-width: 100%;
  `;

const VideoSection = styled.div`
  /* padding:15%; */
  display: flex;
  flex: row;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
`;

const ReviewSection = styled.div`
  color: #343a40;
  background-color: #ffffff;
  margin-top: 60px;
  padding: 100px 120px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;

  
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
  max-width: 100%;

`;

const ReactiveSection= styled.div`
  height: 80vh;
  max-width: 100%;


`;





function App() {
  return (
    <>
      <Container>
        <MainSection>
          <MainArticle>
            <TitleStrong>내</TitleStrong>
            <TitleWrapper>
              <p>마음대로 운동하기</p>
              <strong>"루띤"</strong>
            </TitleWrapper>
          </MainArticle>
          <MainPicture src='/' height="100px" width="700px"></MainPicture>
        </MainSection>

        <UsingSection>
        </UsingSection>

        <VideoSection>
          <WorkoutVideo></WorkoutVideo>
        </VideoSection>

        <ReviewSection>
          <div>
            <h2>rouDDine을 사용한 많은 분들이 목표 달성에 성공하셨습니다.</h2>
            <article>하루의 시작도, 하루의 끝도 우리에겐 너무나 소중하니까, 정해진 시간 안에 최고의 효율을 경험해 보세요! 당신도 할 수 있습니다!</article>
          </div>
          <ReviewContainer>
          </ReviewContainer>
        </ReviewSection>

        <ReactiveSection></ReactiveSection>

      </Container>
      <Footer>
      </Footer>
    </>
  )
}

export default App;
