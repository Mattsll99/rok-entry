import React from 'react'
import styled from 'styled-components'
import Logo from './Logo';

function Header() {
  return (
    <Container>
      <Logo />
    </Container>
  )
}

export default Header

const Container = styled.div`
  height: 80px; 
  width: 100%; 
  border-bottom: solid 2px #2E2E2E;
  display: flex; 
  align-items: center; 
  padding-left: 10px; 
  padding-right: 10px;
  position: fixed; 
  top: 0; 
  z-index: 5;
  background: #CDC6BE;
`; 