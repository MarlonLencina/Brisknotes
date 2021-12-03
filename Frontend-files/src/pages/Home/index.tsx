import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Content, Info, Ilustration, Container } from './style';
import ButtonComponent from '../../components/button';
import logoBriskNote from '../../assets/imgs/logobrisknotes.svg';
import ilustrationHome from '../../assets/imgs/ilustrationhomebrisknotes.svg';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <a href="/">
          <img src={logoBriskNote} alt="logo" />
        </a>
        <div>
          <Link to="/signup">
            <ButtonComponent typeOfButton="default">SignUp</ButtonComponent>
          </Link>
          <Link to="/signin">
            <ButtonComponent typeOfButton="border">SignIn</ButtonComponent>
          </Link>
        </div>
      </Header>
      <Content>
        <Info>
          <h1>
            Comece a fazer <b>Notas</b> simples do seu dia
          </h1>
          <strong>Faça notas rápidas, eficientes e elegantes. Anote tudo e libere espaço da sua mente!</strong>
        </Info>
        <Ilustration>
          <img src={ilustrationHome} alt="Ilustration" />
        </Ilustration>
      </Content>
    </Container>
  );
};
export default Home;
