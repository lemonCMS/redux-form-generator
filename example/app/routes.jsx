import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './containers/App';
import Home from './containers/Home';

/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */
export default (store) => {
  const requireAuth = (nextState, replace, callback) => {
    callback();
  };

  const redirectAuth = (nextState, replace, callback) => {
    callback();
  };
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>

    </Route>
  );
};
