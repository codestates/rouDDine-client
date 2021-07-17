import styled from 'styled-components'
import Image from 'next/image'
import Nav from '../src/components/Nav/Nav'
import {useRouter} from 'next/router';
import Main from '../src/components/mainpage/MainSection/Main';
import Footer from '../src/components/mainpage/Footer/Footer';
import Review from '../src/components/mainpage/ReviewSection/Review';


// import {Link} from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;


  const UsingSection = styled.div`
    height: 80vh;
    background-color: #000036;
    max-width: 100%;
  `;



const ReactiveSection = styled.div`
  height: 80vh;
  max-width: 100%;
  `;



function App() {
  const router = useRouter();
  return (
    <>
      <Container>
        <Main/>

        <UsingSection></UsingSection>
        <Review/>

        <ReactiveSection></ReactiveSection>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
