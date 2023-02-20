import React from 'react'
import styled from 'styled-components'

function Gig({profile, name}) {
  return (
    <Container>
      <Profile src={profile}/>
      <Wrapper>{name}</Wrapper>
    </Container>
  )
}

export default Gig

const Container = styled.div`
  height: 150px; 
  width: 230px;
  background: transparent;
  position: relative; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  padding: 10px;
`;

const Wrapper = styled.div`
  height: 100%; 
  width: 100%;
  background: #FFFFFF;
  border-radius: 20px;
  display: flex;
  justify-content: center; 
  align-items: center; 
  text-align: center; 
  font-weight: 200; 
  font-size: 18px;
  color: #2E2E2E;
`;

const Profile = styled.img`
  height: 50px; 
  width: 50px; 
  border-radius: 100px; 
  background: transparent;
  position: absolute; 
  top: -10px; 
  left: 0;
`;