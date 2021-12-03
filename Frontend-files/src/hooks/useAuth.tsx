import React, { createContext, useContext, useState } from 'react';
import toastComponent from '../components/toast';
import SignIn from '../pages/signIn';
import api from '../services/clientAPI';

interface userData {
  name: string;
}

interface IauthCOntext {
  signIn(credentials: IcredentialsReq): void;
  signOut(): void;
  user: userData;
}

interface iDataUser {
  token: string;
  user: object;
}

interface IcredentialsReq {
  email: string;
  password: string;
}

const AuthContext = createContext({} as IauthCOntext);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('brisknotetoken');
    const user = localStorage.getItem('brisknoteuser');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as iDataUser;
  });

  const signIn = async ({ email, password }: IcredentialsReq) => {
    const response = await api.post('/users/login', { email, password });
    const { token, user } = response.data;
    setData({ token, user });
    localStorage.setItem('brisknoteuser', JSON.stringify(user));
    localStorage.setItem('brisknotetoken', token);
  };

  const signOut = async () => {
    localStorage.removeItem('brisknoteuser');
    localStorage.removeItem('brisknotetoken');
    setData({} as iDataUser);
  };

  return <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('you cannot useauth outside a authprovider context');
  }

  return context;
};

export { AuthContext, AuthProvider, useAuth };
