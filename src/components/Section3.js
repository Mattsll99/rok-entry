import React from 'react'
import styled from 'styled-components'

function Section3() {
  return (
    <Container>
      <Title>Come help us decentralize<br />the gig economy</Title>
      <Button>Join the community</Button>
    </Container>
  )
}

export default Section3

const Container = styled.div`
  width: 100%; 
  height: 500px;
  background: #1C1C1C;
  display: flex; 
  flex-direction: column;
  //justify-content: center; 
  align-items: center;
  text-align: center;
  padding-top: 150px;
`;

const Title = styled.text`
  font-weight: 200; 
  font-size: 4vw; 
  color: #FFFFFF;
  @media(max-width: 684px) {
    font-size: 6vw;
  }
`; 

const Button = styled.div`
  height: 80px; 
  width: 280px;
  background: #DDC34B;
  margin-top: 80px;
  border-radius: 200px;
  display: flex; 
  justify-content: center;
  align-items: center;
  font-weight: 300; 
  font-size: 22px;
  color: #2E2E2E;
  cursor: pointer;
`;