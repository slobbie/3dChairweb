import React from 'react';
import styled from 'styled-components';
import BoxContainer from './BoxContainer';
import Meshes from './CoinMesh';

function App() {
  return (
    <Container>
      {/* <Meshes /> */}
      <BoxContainer />
    </Container>
  );
}

export default App;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #333;
`;
