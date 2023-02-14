import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Entrance from './components/Entrance';
import Panel from './components/Panel';
import BottomWrap from './components/BottomWrap';

function App() {
  return (
    <Container>
      <Top>
        <Entrance />
        <Panel />
      </Top>
      <Bottom>
        <BottomWrap />
      </Bottom>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw; 
  height:auto;
  display: flex; 
  flex-direction: column;
  padding: 5px;
  
`;

const Top = styled.div`
  width: 100%; 
  height: auto; 
  display: flex; 
  flex-direction: row;
  justify-content: space-between;
  //padding: 5px;
  @media(max-width: 923px) {
    flex-direction: column;
    //justify-content: center;
    align-items: center;
  }
`; 

const Bottom = styled.div`
  width: 100%; 
  height: auto;
  padding: 10px;
`; 