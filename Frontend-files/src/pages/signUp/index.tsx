import React, { useCallback, useContext, useRef } from 'react';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Container, Text } from './style';
import logoBriskNote from '../../assets/imgs/logobrisknotes.svg';
import InputComponent from '../../components/Input';
import ButtonComponent from '../../components/button';

interface dataRequest {
  name: string;
  email: string;
  password: string;
}

interface ErrorFormat {
  [key: string]: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handlesubmit = useCallback(async (data: dataRequest) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Você precisa de um nome para criar uma conta.'),
        email: Yup.string()
          .required('Você precisa de um nome para criar uma conta.')
          .email('Você precisa de um email válido'),
        password: Yup.string().min(6, 'Você precisa de uma senha com 6 dígitos para criar uma conta.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorMessages: ErrorFormat = {};

        error.inner.forEach((err) => {
          errorMessages[err.path] = err.message;
        });

        console.log(errorMessages);
        formRef.current?.setErrors(errorMessages);
      }
    }
  }, []);

  return (
    <Container>
      <Text>
        <h1>
          Aqui pela <br /> primeira vez? <br />
          faz seu <b>SignUp</b>
        </h1>
      </Text>
      <Form ref={formRef} onSubmit={handlesubmit}>
        <a href="/">
          <img src={logoBriskNote} alt="Logo" />
        </a>
        <InputComponent type="text" placeholder="Nome" name="name" />
        <InputComponent type="text" placeholder="E-mail" name="email" />
        <InputComponent type="password" placeholder="Senha" name="password" />
        <ButtonComponent
          type="submit"
          style={{ width: '300px', color: '#7678ed', fontSize: '1.8rem' }}
          typeOfButton="default"
        >
          SignUp
        </ButtonComponent>
        <strong>Já tem uma conta?</strong>
        <Link to="/signin">
          <p>Clique aqui para fazer seu SignIn</p>
        </Link>
      </Form>
    </Container>
  );
};

export default SignUp;
