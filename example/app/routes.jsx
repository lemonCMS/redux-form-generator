import React from 'react';
import {Route} from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import Login from './containers/Forms/Login';
import Register from './containers/Forms/Register';
import Resource from './containers/Forms/Resource';

/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */
export default () => {
  return (
    <Route component={App}>
      <Route path="/" component={Home}>
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
        <Route path="resource" component={Resource} />
      </Route>
    </Route>
  );
};
