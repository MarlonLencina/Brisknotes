import React from 'react';
import { useHistory } from 'react-router-dom';
import { Icon } from '@iconify/react';
import logoBriskNote from '../../assets/imgs/logobrisknotes.svg';
import { Container, Header, Section, UserInfo, ButtonNewNote, NotesContainer } from './style';
import ButtonComponent from '../../components/button';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../../components/button/style';
import { NoteComponent } from '../../components/Note';

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
        <NoteComponent />
        <NoteComponent />
        <NoteComponent />
      </NotesContainer>
    </Container>
  );
};

export default Dashboard;
