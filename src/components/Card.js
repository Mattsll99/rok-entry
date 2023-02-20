import React from 'react'
import styled from 'styled-components'

function Card() {
  return (
    <Container>
      <Wrapper1>
        <Top>
          <Profile src="../assets/avatar3.png"/>
          <Name>James E.</Name>
        </Top>
        <Body>I will build your <br />landing page</Body>
        <Bottom>
          <Wrap>0.7 ETH</Wrap>
        </Bottom>
      </Wrapper1>
      <Wrapper2></Wrapper2>
      <Wrapper3></Wrapper3>
    </Container>
  )
}

export default Card

const Container = styled.div`
  position: relative;
  height: 400px; 
  width: 400px;
  background: transparent;
  @media(max-width: 835px) {
    width: 95%;
  }
  @media(max-width: 684px) {
    margin-top: 80px;
    width: 60%;
  }
  @media(max-width: 493px) {
    width: 290px;
  }
`;

const Wrapper1 = styled.div`
  height: 95%; 
  width:95%; 
  position: absolute; 
  background: #FFFFFF;
  border: solid 2px #2E2E2E;
  top: 0; 
  left: 0;
  z-index: 3;
  display: flex; 
  flex-direction: column;
`; 

const Top = styled.div`
  height: 25%; 
  width: 100%; 
  background: #2E2E2E;
  display: flex; 
  flex-direction: row;
  align-items: center;
  padding-left: 20px; 
  padding-right: 20px;
`;

const Profile = styled.img`
  height: 60px; 
  width: 60px; 
  border-radius: 120px; 
  background: transparent;
`;

const Name = styled.text`
  font-size: 40px; 
  background: transparent; 
  font-weight: 100; 
  color: #FFFFFF;
  margin-left: 20px;
  @media(max-width: 684px) {
    font-size: 30px;
  }
`;

const Body = styled.div`
  height: 50%; 
  width: 100%; 
  display: flex; 
  justify-content: center;
  align-items: center; 
  text-align: center; 
  font-weight: 200; 
  font-size: 30px; 
  color: #2E2E2E;
`; 

const Bottom = styled(Top)`
  justify-content: end;
  padding: 15px;
`;

const Wrap = styled.div`
  height: 100%; 
  width: 150px; 
  background: transparent;
  border: solid 1px #FFFFFF;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  font-weight: 200; 
  font-size: 30px;
  border-radius: 100px;
  color: #FFFFFF;
  @media(max-width: 684px) {
    font-size: 25px;
  }
`;


const Wrapper2 = styled(Wrapper1)`
  top: 10px; 
  left: 10px;
  z-index: 2;
`;

const Wrapper3 = styled(Wrapper2)`
  top: 20px; 
  left: 20px;
  z-index: 1;
`;