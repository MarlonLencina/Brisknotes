import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { Container, Text, Error } from './style';
import logoBriskNote from '../../assets/imgs/logobrisknotes.svg';
import InputComponent from '../../components/Input';
import ButtonComponent from '../../components/button';
import { useAuth } from '../../hooks/useAuth';
import { useToast } from '../../hooks/useToast';

interface RequestSignIn {
  email: string;
  password: string;
}

interface ErrorMessage {
  message: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef(null);
  const { signIn, user } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(async ({ email, password }: RequestSignIn) => {
    try {
      await signIn({ email, password });
    } catch (err) {
      addToast({ title: 'Erro de atenticação', description: 'Revise suas credenciais e tente novamente.' });
    }
  }, []);

  return (
    <Container>
      <Text>
        <h1>
          Bem-vindo <br /> de volta bora <br /> fazer <b>SignIn</b>
        </h1>
      </Text>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <a href="/">
          <img src={logoBriskNote} alt="Logo" />
        </a>
        <InputComponent name="email" type="email" placeholder="E-mail" />
        <InputComponent name="password" type="password" placeholder="Senha" />
        <ButtonComponent
          type="submit"
          style={{ width: '300px', color: '#7678ed', fontSize: '1.8rem' }}
          typeOfButton="default"
        >
          SignUp
        </ButtonComponent>
        <strong>Não tem uma conta?</strong>
        <Link to="/signup">
          <p>Clique aqui para fazer seu SignUp</p>
        </Link>
      </Form>
    </Container>
  );
};

export default SignIn;
