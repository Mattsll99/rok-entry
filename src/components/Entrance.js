import React from 'react'
import styled from 'styled-components'
import Card from './Card';

function Entrance() {
  return (
    <Container>
      <Left>
        <Body>Offer services <br /> Get paid in crypto</Body>
        <Bottom>
          <LeftSide>
            <Link href='https://twitter.com/ROK_Market' target='_blank'>
            <LeftButton>
              <Wrapper>See ROK development</Wrapper>
            </LeftButton>
            </Link>
            <Handle>One click and that's it</Handle>
          </LeftSide>
        </Bottom>
      </Left>
      <Right>
        <Card />
      </Right>
    </Container>
  )
}

export default Entrance

const Container = styled.div`
  height: 550px; 
  width: 100%; 
  margin-top: 80px;
  display: flex; 
  flex-direction: row; 
  border-bottom: solid 2px #2E2E2E;
  @media(max-width: 684px) {
    flex-direction: column;
    height: auto;
    border-bottom: none;
  }
`;

const Handle = styled.text`
  font-size: 14px;
  font-weight: 300;
`;

const Link = styled.a`
  height: 100%; 
  width: 100%; 
  text-decoration: none;
  color: #2E2E2E; 
  display: flex;
  justify-content: center; 
  align-items: center;
`;

const Left = styled.div`
  width: 50%; 
  height: 100%; 
  border-right: solid 2px #2E2E2E;
  display: flex; 
  flex-direction: column;
  @media(max-width: 684px) {
    width: 100%;
    border-right: none;
  }
`; 

const Right = styled.div`
  width: 50%; 
  height: 100%; 
  display: flex; 
  justify-content: center; 
  align-items: center;
  @media(max-width: 684px) {
    width: 100%;
  }
`;

const Body = styled.div`
  width: 100%; 
  height: 80%;
  border-bottom : solid 2px #2E2E2E;
  font-weight: 400; 
  font-size: 4vw;
  padding: 20px;
  color: #2E2E2E;
  display: flex; 
  justify-content: center; 
  align-items: center;
  @media(max-width: 684px) {
    height: 200px;
    font-size: 6vw;
    text-align: center;
  }
`; 

const Bottom = styled.div`
  width: 100%; 
  height: 20%;
  display: flex; 
  flex-direction: row; 
  @media(max-width: 684px) {
    height: 100px;
    border-bottom: solid 2px #2E2E2E;
  }
`;

const LeftSide = styled.div`
  height: 100%; 
  width: 100%; 
  //border-right: solid 2px #2E2E2E;
  display: flex; 
  justify-content: center; 
  align-items: center;
  padding: 10px;
  display: flex;
  flex-direction: column;
`; 

const LeftButton = styled.div`
  height: 70px; 
  //width: 80%;
  width: auto;
  border-radius: 100px;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  font-weight: 200; 
  font-size: 1.8vw;
  background: transparent; 
  border: solid 2px #2E2E2E;
  padding: 10px;
  cursor: pointer;
  @media(max-width: 684px) {
    font-size: 3.8vw;
    padding: 3px;
  }
`;

const Wrapper = styled.div`
  height: 100%; 
  width: 100%; 
  border: solid 2px #2E2E2E; 
  background: #DDC34B;
  border-radius: 100px;
  display: flex; 
  justify-content: center; 
  align-items: center;
  font-weight: 300;
  padding: 20px;
`;
