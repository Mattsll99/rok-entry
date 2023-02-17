import React from 'react'
import styled from 'styled-components'

function Button({size}) {
  return (
    <Container style={{width: {size}}}>
      <a href='https://rok-beta.vercel.app/' target='blank'>
      <Wrapper1>Test App</Wrapper1>
      <Wrapper2></Wrapper2>
      <Wrapper3></Wrapper3>
      </a>
    </Container>
  )
}

export default Button

const Container  = styled.div`
  height: 70px; 
  width: 150px;
  position: relative;
  @media(max-width: 475px) {
    width: 35%;
  }
`;

const Wrapper1 = styled.div`
  height: 60px; 
  width: 100%; 
  background: pink;
  position: absolute;
  bottom: 0; 
  left: 0;
  background: #FFFFFF; 
  border: solid 2px #222222;
  z-index: 3;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  color: #222222; 
  font-size: 20px; 
  font-weight: 300; 
  cursor: pointer; 
  &:hover {
    background: #222222; 
    color: #FFFFFF;
  }
  @media(max-width: 475px) {
    font-size: 4vw;
  }
`; 

const Wrapper2 = styled(Wrapper1)`
  bottom: 5px; 
  left: 5px;
  z-index: 2; 
`; 

const Wrapper3 = styled(Wrapper2)`
  bottom: 10px; 
  left: 10px; 
  z-index: 1;
`;