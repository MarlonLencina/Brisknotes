import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useSpring } from 'react-spring';
import { Toast, Container } from './style';
import { ItoastMessage, useToast } from '../../hooks/useToast';

interface toastContainerProps {
  messages: ItoastMessage[];
}

const ToastComponent: React.FC<toastContainerProps> = ({ messages }) => {
  const props = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, reset: true });

  return (
    <Container>
      {messages.map((message) => {
        return (
          <Toast style={props} key={message.id}>
            <Icon icon="bx:bxs-error" />
            <div>
              <strong>{message.title}</strong>
              <p>{message.description}</p>
            </div>
          </Toast>
        );
      })}
    </Container>
  );
};

export default ToastComponent;
