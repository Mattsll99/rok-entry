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
            <LeftButton>Updates</LeftButton>
          </LeftSide>
          <RightSide>
            <RightButton>Join the community</RightButton>
          </RightSide>
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
  height: 500px; 
  width: 100%; 
  margin-top: 80px;
  display: flex; 
  flex-direction: row; 
  border-bottom: solid 2px #2E2E2E;
`;

const Left = styled.div`
  width: 50%; 
  height: 100%; 
  border-right: solid 2px #2E2E2E;
  display: flex; 
  flex-direction: column;
`; 

const Right = styled.div`
  width: 50%; 
  height: 100%; 
  display: flex; 
  justify-content: center; 
  align-items: center;
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
`; 

const Bottom = styled.div`
  width: 100%; 
  height: 20%;
  display: flex; 
  flex-direction: row; 
`;

const LeftSide = styled.div`
  height: 100%; 
  width: 50%; 
  border-right: solid 2px #2E2E2E;
  display: flex; 
  justify-content: center; 
  align-items: center;
  padding: 10px;
`; 

const RightSide = styled(LeftSide)`
  border: none;
`;

const LeftButton = styled.div`
  height: 100%; 
  width: 80%;
  background: red;
  border-radius: 100px;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  font-weight: 200; 
  font-size: 1.8vw;
  background: transparent; 
  border: solid 2px #2E2E2E;
  cursor: pointer;
`;

const RightButton  = styled(LeftButton)`
  background: #DDCE4B;
  width: 100%;
`;