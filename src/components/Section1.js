import React from 'react'
import styled from 'styled-components'
import Gig from './Gig';

function Section1() {
  return (
    <Container>
      <Top>All the gigs are welcome</Top>
      <Body>
        <Gig 
          name="I will make a tiktok for your brand"
          profile="../assets/avatar2.png"
        />
        <Gig 
          name="I will teach you Javascript"
          profile="../assets/avatar3.png"
        />
        <Gig 
          name="I will retweet your pinned tweet"
          profile="../assets/avatar4.png"
        />
        <Gig 
          name="I will right a love song for you"
          profile="../assets/avatar2.png"
        />
        <Gig 
          name="I will create a blog for your shop"
          profile="../assets/avatar2.png"
        />
        <Gig 
          name="I will design your NFT collection"
          profile="../assets/avatar4.png"
        />
      </Body>
    </Container>
  )
}

export default Section1

const Container = styled.div`
  width: 100%; 
  height: 600px; 
  background: #1C1C1C;
  display: flex; 
  flex-direction: column;
`;

const Top = styled.div`
  width: 100%; 
  height: 30%; 
  font-weight: 300; 
  font-size: 5vw;
  color: #FFFFFF;
  padding-top: 100px;
  padding-left: 20px; 
  padding-right: 20px;
`; 

const Body = styled.div`
  //height: 70%; 
  width: 100%; 
  margin-top: 70px;
  padding: 20px;
  display: flex; 
  flex-direction: row;
`;