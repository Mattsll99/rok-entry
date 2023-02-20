import React from 'react'
import styled from 'styled-components'
import Gig from './Gig';

function Section1() {
  return (
    <Container>
      <Top>All the gigs are welcome</Top>
      <Body>
        <Wrap1>
        <Gig 
          name="I will make a tiktok for your brand"
          profile="../assets/avatar2.png"
        />
        </Wrap1>
        <Wrap2>
        <Gig 
          name="I will teach you Javascript"
          profile="../assets/avatar3.png"
        />
        </Wrap2>
        <Wrap3>
        <Gig 
          name="I will retweet your pinned tweet"
          profile="../assets/avatar4.png"
        />
        </Wrap3>
        <Wrap4>
        <Gig 
          name="I will right a love song for you"
          profile="../assets/avatar2.png"
        />
        </Wrap4>
        <Wrap5>
        <Gig 
          name="I will create a blog for your shop"
          profile="../assets/avatar2.png"
        />
        </Wrap5>
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
  @media(max-width: 684px) {
    margin-top: 100px;
    height: 500px;
  }
`;

const Wrap1 = styled.div``;

const Wrap2 = styled(Wrap1)``; 

const Wrap3 = styled(Wrap1)`
  @media(max-width: 700px) {
    display: none;
  }
`;

const Wrap4 = styled(Wrap1)`
  @media(max-width: 930px) {
    display: none;
  }
`;

const Wrap5 = styled(Wrap1)`
@media(max-width: 1165px) {
  display: none;
}
`;

const Wrap6 = styled(Wrap1)`
@media(max-width: 1300px) {
  display: none;
}
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
  @media(max-width:684px) {
    font-size: 8vw;
  }
`; 

const Body = styled.div`
  //height: 70%; 
  width: 100%; 
  margin-top: 70px;
  padding: 20px;
  display: flex; 
  flex-direction: row;
  justify-content: center;
  @media(max-width: 475px) {
    flex-direction: column;
    align-items: center;
  }
`;