import React from 'react';
import { Container } from './style';

const NotFound: React.FC = () => {
  return (
    <Container>
      <h1>
        <b> Desculpe!</b> <br /> Essa página não existe.
      </h1>
      <p> Ass. BriskNotes</p>
    </Container>
  );
};

export default NotFound;
