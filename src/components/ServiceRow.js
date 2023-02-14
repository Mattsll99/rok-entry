import React from 'react'
import styled from 'styled-components'

function ServiceRow({profile, service, price}) {
  return (
    <Container>
      <Left>
        <Profile src={profile}/>
      </Left>
      <Right>{service}</Right>
      <PriceBox>{price}</PriceBox>
    </Container>
  )
}

export default ServiceRow

const Container = styled.div`
  height: 90px; 
  width: 100%; 
  //padding: 10px; 
  border-bottom: solid 1px #434343;
  position: relative;
  display: flex; 
  flex-direction: row;
`;

const Left = styled.div`
  height: 100%; 
  width: 80px; 
  display: flex; 
  justify-content: center; 
  align-items: center;
`; 

const Right = styled.div`
  height: 100%; 
  width: auto; 
  padding: 10px; 
  font-size: 18px; 
  font-weight: 300; 
  color: #222222;
  display: flex; 
  align-items: center;
  @media(max-width: 520px) {
    font-size: 3vw;
  }
`;

const Profile = styled.img`
  height: 70px; 
  width: 70px; 
  background: transparent;
  border-radius: 35px;
`;

const PriceBox = styled.div`
  height: 30px; 
  width: auto; 
  position: absolute; 
  bottom : 0; 
  right: 0; 
  background: #434343; 
  color: #FFFFFF;
  font-weight: 300; 
  font-size: 16px;
  display: flex; 
  justify-content: end;
  padding: 5px;
`;