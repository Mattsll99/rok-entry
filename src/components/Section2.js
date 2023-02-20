import React from 'react'
import styled from 'styled-components'

function Section2() {
  return (
    <Container>
      <Wrapper>
        <Title>Charge Less, Earn More</Title>
        <SubTitle>No intermediary between you and your customers</SubTitle>
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
`;

const Title = styled.text`
  font-weight: 200; 
  font-size: 5vw;
  color: #2E2E2E;
`;

const SubTitle = styled.text`
  font-weight: 200; 
  font-size: 2.5vw;
  color: #2E2E2E;
  margin-top: 30px;
`;