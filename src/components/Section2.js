import React from 'react'
import styled from 'styled-components'

function Section2() {
  return (
    <Container>
      <Wrapper>
        <Title>Charge Less, Earn More</Title>
        <Wrap>
          <Left>No intermediary between you and your customers</Left>
          <Right>Almost no fee</Right>
        </Wrap>
      </Wrapper>
    </Container>
  )
}

export default Section2

const Container = styled.div`
  height: 500px; 
  width: 100%;
  background: transparent;
  background: #1C1C1C;
  display: flex; 
  justify-content: center; 
  align-items: center;
  padding: 30px;
`;

const Wrapper = styled.div`
  height: 100%; 
  width: 100%; 
  background: #CDC6BE;
  border-radius: 50px;
  padding: 20px;
  display: flex; 
  flex-direction: column;
  position: relative;
`;

const Title = styled.text`
  font-weight: 200; 
  font-size: 5vw;
  color: #2E2E2E;
  @media(max-width: 684px) {
    font-size: 6vw;
  }
`;

const SubTitle = styled.text`
  font-weight: 200; 
  font-size: 2.5vw;
  color: #2E2E2E;
  margin-top: 30px;
`;

const Wrap = styled.div`
  height: 70%; 
  width: 100%;
  position: absolute; 
  bottom :0;
  left:0; 
  right: 0; 
  margin-left: auto;
  margin-right: auto;
  background: transparent;
  padding: 10px; 
  display: flex; 
  flex-direction: row;
  justify-content: space-between;
  @media(max-width: 684px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  height: 100%; 
  width: 48%;
  background: #2E2E2E;
  border-radius: 40px;
  display: flex; 
  color: #FFFFFF; 
  font-weight: 200; 
  font-size: 3vw;
  align-items: center;
  justify-content: center; 
  text-align: center;
  @media(max-width: 684px) {
    height: 48%; 
    width: 100%;
    padding: 10px;
    font-size: 5vw;
  }
`; 

const Right = styled(Left)``;