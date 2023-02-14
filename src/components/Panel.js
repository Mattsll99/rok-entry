import React from 'react'
import styled from 'styled-components'
import ServiceRow from './ServiceRow';

function Panel() {
  return (
    <Container>
      <Wrapper1>
        <ServiceRow 
          profile="../assets/avatar2.png"
          service="I make a TikTok video for your brand"
          price="0.0002 ETH"
        />
        <ServiceRow 
          profile="../assets/avatar3.png"
          service="I retweet your fav tweet"
          price="0.00003 ETH"
        />
        <ServiceRow 
          profile="../assets/avatar4.png"
          service="I build your landing page"
          price="0.6 ETH"
        />
        <ServiceRow 
          profile="../assets/avatar1.png"
          service="I make an insta story for your shop"
          price="0.0006 ETH"
        />
      </Wrapper1>
      <Wrapper2></Wrapper2>
      <Wrapper3></Wrapper3>
    </Container>
  )
}

export default Panel

const Container = styled.div`
  height: 400px; 
  width: 45%; 
  position: relative;
  @media(max-width: 923px) {
    width: 80%;
    margin-top: 40px;
  }
  @media(max-width: 559px) {
    width: 100%;
  }
`;

const Wrapper1 = styled.div`
  height: 95%; 
  width: 90%; 
  position: absolute;
  bottom: 0; 
  left: 0;
  background: #FFFFFF; 
  border: solid 2px #222222;
  z-index: 3;
  display: flex; 
  flex-direction: column;
  color: #222222; 
  font-size: 20px; 
  font-weight: 300; 
  padding: 10px;
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