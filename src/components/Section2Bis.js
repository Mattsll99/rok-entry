import React from 'react'
import styled from 'styled-components'

function Section2Bis() {
  return (
    <Container>
      <Line></Line>
      <Wrapper>
        <Title>A Marketplace focused on sellers</Title>
        <SubTitle>ROK makes your life easier, from finding clients, to getting paid well</SubTitle>
      </Wrapper>
      <Wrapper2>
        <Title>Get rid of searching for clients</Title>
        <SubTitle>We are building a fair system to help you find customers based on the quality of your services, and nothing else</SubTitle>
      </Wrapper2>
    </Container>
  )
}

export default Section2Bis

const Container = styled.div`
  width: 100%; 
  height: 800px;
  display: flex; 
  align-items: center;
  justify-content: center; 
  position: relative; 
`;

const Line = styled.div`
  height: 100%; 
  width: 2px; 
  background: #1C1C1C;
`;

const Wrapper = styled.div`
  height: 250px; 
  width: 45%; 
  background: #1C1C1C;
  position: absolute; 
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
  top: 120px;
  border-radius: 50px;
  display: flex; 
  flex-direction: column;
  padding: 20px;
  align-items: center;
  text-align: center;
  @media(max-width: 684px) {
    width: 70%;
    padding: 10px;
  }
`; 

const Wrapper2 = styled(Wrapper)`
  margin-top: 350px;
`;

const Title = styled.text`
  //font-size: 2vw; 
  font-size: 30px;
  font-weight: 300;
  color: #FFFFFF;
  @media(max-width: 988px) {
    font-size: 3vw;
  }
  @media(max-width: 684px) {
    font-size: 4vw;
  }
  @media(max-width: 376px) {
    font-size: 6vw;
  }
`; 

const SubTitle = styled.text`
  //font-size: 1.5vw;
  font-size: 23px;
  font-weight: 200; 
  margin-top: 20px;
  color: #898989;
  @media(max-width: 988px) {
    font-size: 2.3vw;
  }
  @media(max-width: 684px) {
    font-size: 3.8vw;
  }
  @media(max-width: 376px) {
    font-size: 4.3vw;
  }
`;