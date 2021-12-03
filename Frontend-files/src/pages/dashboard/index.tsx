import React from 'react';
import { useHistory } from 'react-router-dom';
import logoBriskNote from '../../assets/imgs/logobrisknotes.svg';
import { Container, Header } from './style';
import ButtonComponent from '../../components/button';
import { useAuth } from '../../hooks/useAuth';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  const redirect = async () => {
    signOut();
  };

  return (
    <Container>
      <Header>
        <a href="/">
          <img src={logoBriskNote} alt="logo" />
        </a>
        <div>
          <ButtonComponent onClick={redirect} typeOfButton="default">
            signOut
          </ButtonComponent>
        </div>
      </Header>
      <h1>{user.name}</h1>
    </Container>
  );
};

export default Dashboard;
