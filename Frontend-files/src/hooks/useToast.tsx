import React, { createContext, useCallback, useContext, useState } from 'react';
import { string } from 'yup';
import { uuid } from 'uuidv4';
import ToastComponent from '../components/toast';

interface IcontextData {
  addToast(messageInfo: Omit<ItoastMessage, 'id'>): void;
  removeToast(id: string): void;
}

export interface ItoastMessage {
  id: string;
  title: string;
  description: string;
}

const toastContext = createContext({} as IcontextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ItoastMessage[]>([]);

  const removeToast = (id: string) => {
    setMessages((oldMessages) => oldMessages.filter((message) => message.id !== id));
  };

  const addToast = useCallback((messageInfo: Omit<ItoastMessage, 'id'>) => {
    const id = uuid();
    const toast = {
      id,
      title: messageInfo.title,
      description: messageInfo.description,
    };

    setMessages((oldmessages) => [...oldmessages, toast]);

    setTimeout(() => {
      removeToast(id);
    }, 2000);
  }, []);

  return (
    <toastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastComponent messages={messages} />
    </toastContext.Provider>
  );
};

const useToast = () => {
  const context = useContext(toastContext);

  if (!context) {
    throw new Error('you cant use useToast outside a toastprovider');
  }

  return context;
};

export { useToast, ToastProvider, toastContext };
