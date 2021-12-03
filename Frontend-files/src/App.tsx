import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyle } from './styles/style';
import RoutesComponent from './routes/routesComponent';
import ToastComponent from './components/toast';
import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <AppProvider>
          <RoutesComponent />
        </AppProvider>
      </Router>
      <GlobalStyle />
    </>
  );
};

export default App;
