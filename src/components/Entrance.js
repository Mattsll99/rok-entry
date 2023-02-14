import React from 'react'
import styled from 'styled-components'
import Button from './Button';
import Community from './Community';
import Logo from './Logo';

function Entrance() {
  return (
    <Container>
      <Top>
        <Logo />
      </Top>
      <Body>Offer any service <br /> earn crypto
      </Body>
      <Bottom>
        <Button/>
        <Community />
      </Bottom>
    </Container>
  )
}

export default Entrance

const Container = styled.div`
  width: 50%; 
  height: 400px; 
  border-radius: 15px;
  background: #434343;
  padding: 10px;
  @media(max-width: 923px) {
    width: 100%;
  }
`;

const Top = styled.div`
  width: 100%; 
  height: 20%; 
`; 

const Body = styled.div`
  width: 100%; 
  height:50%; 
  text-align: center; 
  display: flex;
  justify-content: center; 
  padding-top: 50px;
  //align-items: center; 
  font-weight: 300; 
  //font-size: 50px;
  font-size: 3.5vw; 
  color: #FFFFFF;
  @media(max-width: 923px) {
    font-size: 6vw;
  }
`; 

const Bottom = styled.div`
  width: 100%; 
  height: 30%; 
  display: flex; 
  flex-direction: row;
  display: flex; 
  align-items: center; 
  justify-content: center;
  column-gap: 60px;
  @media(max-width: 1020px) {
    column-gap: 30px;
  }
  @media(max-width: 476px) {
    column-gap: 20px;
  }
`;