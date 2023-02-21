import React from 'react'
import styled from 'styled-components'

function Section3() {
  return (
    <Container>
      <Title>Come help us decentralize<br />the gig economy</Title>
      <Link href='https://twitter.com/ROK_Market' target='_blank'>
      <Button>
        <Wrapper>Join ROK public development</Wrapper>
      </Button>
      </Link>
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

const Link = styled.a`
  height: auto; 
  width: auto; 
  text-decoration: none;
  color: #2E2E2E; 
  display: flex;
  justify-content: center; 
  align-items: center;
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
  height: 90px; 
  width: 390px;
  background: #CDC6BE;
  margin-top: 80px;
  border-radius: 200px;
  display: flex; 
  justify-content: center;
  align-items: center;
  font-weight: 300; 
  font-size: 22px;
  color: #2E2E2E;
  padding: 10px; 
  cursor: pointer;
`;

const Wrapper = styled.div`
  height: 100%; 
  width: 100%;
  background: #DDC34B; 
  border: solid 2px #2E2E2E;
  border-radius: 100px;
  display: flex; 
  justify-content: center; 
  align-items: center;
  //font-size: 1.5vw; 
  font-size: 20px;
  font-weight: 400; 
  color: #2E2E2E;
`; 