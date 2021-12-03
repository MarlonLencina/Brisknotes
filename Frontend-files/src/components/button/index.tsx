import React, { ButtonHTMLAttributes } from 'react';
import { Button } from './style';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeOfButton: 'default' | 'border';
}

const ButtonComponent: React.FC<ButtonProps> = ({ children, typeOfButton, ...rest }) => {
  return (
    <Button {...rest} typeOfButton={typeOfButton}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
