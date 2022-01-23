import React from 'react';
import { Container } from '../../../test-app/node_modules/react-bootstrap/esm';
import '../index.css';
import logo from '../assets/Frame227.png'

const App = () => {
  return (
  <Container>
  <img className="logo" src={ logo } alt="logo"/>

  </Container>
  );
};

export default App;