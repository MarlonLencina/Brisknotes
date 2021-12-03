import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './index';
import Home from '../pages/Home/index';
import SignUp from '../pages/signUp';
import SignIn from '../pages/signIn';
import NotFound from '../pages/NotFound';
import Dashboard from '../pages/dashboard';

const RouteComponent: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact isPrivate={false} component={Home} />
      <Route path="/signin" isPrivate={false} component={SignIn} />
      <Route path="/signup" isPrivate={false} component={SignUp} />
      <Route path="/dashboard" isPrivate component={Dashboard} />
      <Route path="*" component={NotFound} isPrivate={false} />
    </Switch>
  );
};

export default RouteComponent;

/* <Route path="/" exact isPrivate={false} component={Home} />
    <Route path="/signin" isPrivate={false} component={SignIn} />
    <Route path="/signup" isPrivate={false} component={SignUp} />
    <Route path="/dashboard" isPrivate component={Dashboard} />
    <Route path="*" component={NotFound} isPrivate={false} /> */
