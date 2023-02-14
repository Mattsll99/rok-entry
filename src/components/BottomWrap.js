import React from 'react'
import styled from 'styled-components'

function BottomWrap() {
  return (
    <Container>
      <Wrapper1>Super Easy <br />Super Fast <br />Super Decentralized</Wrapper1>
      <Wrapper2></Wrapper2>
      <Wrapper3></Wrapper3>
    </Container>
  )
}

export default BottomWrap

const Container  = styled.div`
  //height: 350px; 
  height: 20vw;
  width: 60%;
  position: relative;
  @media(max-width: 923px) {
    width: 90%;
    margin-top: 40px;
  }
`;

const Wrapper1 = styled.div`
  height: 90%; 
  width: 100%; 
  background: pink;
  position: absolute;
  bottom: 0; 
  left: 0;
  background: #3B5E3A; 
  border: solid 5px #FFFFFF;
  z-index: 3;
  display: flex; 
  justify-content: start; 
  align-items: center;
  padding: 10px;
  color: #FFFFFF; 
  //font-size: 60px; 
  font-size: 4vw;
  font-weight: 400; 
  //cursor: pointer; 
  &:hover {
    background: #222222; 
    color: #FFFFFF;
  }
`; 

const Wrapper2 = styled(Wrapper1)`
  bottom: 10px; 
  left: 10px;
  z-index: 2; 
`; 

const Wrapper3 = styled(Wrapper2)`
  bottom: 20px; 
  left: 20px; 
  z-index: 1;
`;