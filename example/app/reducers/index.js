import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

import store from './store';

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  form: formReducer,
  routing,
  store
});

export default rootReducer;
