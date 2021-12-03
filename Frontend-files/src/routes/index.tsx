import React from 'react';
import { RouteProps as ReactDOMRouteProps, Route as ReactDOMRoute, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ component: Component, isPrivate = false, ...rest }) => {
  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!user ? <Component /> : <Redirect to={{ pathname: isPrivate ? '/' : '/dashboard' }} />;
      }}
    />
  );
};

export default Route;
