import React from 'react'
import styled from 'styled-components'

function Logo() {
  return (
    <Container>ROK</Container>
  )
}

export default Logo

const Container = styled.div`
  height: 60px; 
  width: 110px;
  background: #DDC34B;
  border-radius: 10px; 
  border: solid 2px #2E2E2E;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  font-size: 50px; 
  font-weight: 500; 
  color: #2E2E2E;
`;
