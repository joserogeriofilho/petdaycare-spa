import React from 'react';
import { Route, Switch, HashRouter, Redirect } from 'react-router-dom';
import { isLogged } from './utils/auth';

import { Login } from './pages/login'
import { Home } from './pages/home'
import { Clients } from './pages/clients';

export default function Routes(props) {
 return (
  <HashRouter>
    <Switch>
      <RouteWrapper isPrivate={true} path='/' exact component={Home} />
      <RouteWrapper isPrivate={true} path='/clients' component={Clients} />
      <RouteWrapper isPrivate={false} path='/login' component={Login} />

      {/* Redirects a user to a valid path in case of 404 */}
      <Redirect to="/" />
    </Switch>
  </HashRouter>
  );
}

function RouteWrapper({ component, isPrivate, ...rest }) {
  const logged = isLogged();

  /**
   * Redirect user to /login if he tries to access a private route
   * without authentication.
   */
  if (isPrivate && !logged) {
    return <Redirect to="/login" />;
  }

  /**
   * Redirect user to / if he tries to access a non private route
   * (SignIn or SignUp) after being authenticated.
   */
  if (!isPrivate && logged) {
    return <Redirect to="/" />
  }

  /**
   * If not included on both previous cases, redirect user to the desired route.
   */
  return <Route {...rest} component={component} />;
}