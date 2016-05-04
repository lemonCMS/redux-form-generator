import React from 'react';
import {Route} from 'react-router';

export default () => {
  return (
    <Route path="/" component={require('../src/components/App/App')} />
  );
};
