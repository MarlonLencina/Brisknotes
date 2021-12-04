import React from 'react';
import { useHistory } from 'react-router-dom';
import { Icon } from '@iconify/react';
import logoBriskNote from '../../assets/imgs/logobrisknotes.svg';
import { Container, Header, Section, UserInfo, ButtonNewNote, NotesContainer } from './style';
import ButtonComponent from '../../components/button';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../../components/button/style';

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
      <Section>
        <UserInfo>
          <h1>Hey, marlon</h1>
          <p>Today is wednesday, 25/11/2021</p>
        </UserInfo>
        <ButtonNewNote>
          Criar nova nota
          <Icon icon="bi:plus" />
        </ButtonNewNote>
      </Section>
      <NotesContainer>
        <Notes>
          <InfoNote>
            <h1>levar o cachorro para passear</h1>
            <p>levar o cachorro para passear depois de acabar as tarefas</p>
            <Tags>
              <span>Rotina</span>
            </Tags>
          </InfoNote>
          <Action>
            <button>Delete</button>
            <CreationDateNote />
          </Action>
        </Notes>
      </NotesContainer>
    </Container>
  );
};

export default Dashboard;
