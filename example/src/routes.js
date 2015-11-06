import React from 'react';
import {Route} from 'react-router';
import {
  App,
  Home
} from 'components';

export default () => {
  return (
    <Route component={App}>
      <Route path="/" component={Home}/>
    </Route>
  );
};
