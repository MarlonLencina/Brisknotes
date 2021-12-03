import styled, { css } from 'styled-components';

interface inputProps {
  isFilled: boolean;
}

export const Input = styled.div<inputProps>`
  position: relative;
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  width: 30rem;
  border: 2px solid #fff;

  input {
    flex: 1;
    outline: 0;
    border-style: none;
    color: #7678ed;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.7rem;

    ::placeholder {
      color: #7678ed;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 1.7rem;
    }
  }

  & + div {
    margin-top: 1rem;
  }
`;

export const ErrorInput = styled.div`
  svg {
    flex: 1;
    color: #7678ed;
    font-size: 2rem;
  }
  div {
    visibility: hidden;
    position: absolute;
    background-color: white;
    border: 2px solid #7678ed;
    padding: 1rem;
    border-radius: 1rem;
    top: -2rem;
    right: -2rem;
    width: 15rem;

    p {
      color: #7678ed;
      font-size: 1rem;
      font-weight: bold;
    }
  }

  svg:hover + div {
    visibility: visible;
  }
`;
