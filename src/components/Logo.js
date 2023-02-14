import React from 'react'
import styled from 'styled-components'

function Logo() {
  return (
    <Container>
      <Wrapper1>ROK</Wrapper1>
      <Wrapper2></Wrapper2>
      <Wrapper3></Wrapper3>
    </Container>
  )
}

export default Logo

const Container = styled.div`
  height: 100%; 
  width: 230px; 
  position: relative;
`; 

const Wrapper1 = styled.div`
  height: 60px; 
  width: 150px; 
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
  font-size: 40px; 
  font-weight: 500; 
  //cursor: pointer; 
  &:hover {
    background: #222222; 
    color: #FFFFFF;
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