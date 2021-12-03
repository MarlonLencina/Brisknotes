import styled, { css } from 'styled-components';

interface ButtonComponent {
  typeOfButton: 'default' | 'border';
}

export const Button = styled.button<ButtonComponent>`
  padding: 1rem 4rem;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  border-radius: 1rem;
  outline: 0;
  border-style: none;
  color: white;
  transition: 0.2s;

  ${(props) =>
    props.typeOfButton === 'default'
      ? css`
          background-color: #3d348b;
          border: 2px solid #3d348b;

          &:hover {
            background-color: #2b2469;
            border: 2px solid #2b2469;
          }
        `
      : css`
          border: 2px solid #3d348b;
          background-color: transparent;
          color: #3d348b;
          &:hover {
            background-color: #3d348b;
            border: 2px solid #3d348b;
            color: white;
          }
        `}

  margin: .5rem;
`;
