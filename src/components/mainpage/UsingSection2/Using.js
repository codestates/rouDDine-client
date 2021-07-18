import React from 'react'
import styled from 'styled-components'

function Using2() {
  return (
    <Container>
        <Text>
          <Title>드래그 앤 드롭</Title>
          <Contents>운동의 순서를 쉽게 변경하세요.</Contents>
        </Text>
        <ImageContainer src="/main/main.gif" alt="test"></ImageContainer>
    </Container>
    
  )
}

export default Using2


const Text = styled.div`
`;

const Title = styled.h1`

`;

const Contents = styled.h3`

`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ImageContainer = styled.img`
  height: 500px;
  width: auto;
  background-color: #f3f5f7;
  border-radius: 20px;
  border: 8px gray solid;
  margin-bottom: 100px;

`;
