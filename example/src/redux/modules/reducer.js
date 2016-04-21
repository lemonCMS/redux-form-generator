import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {routerStateReducer} from 'redux-router';
import exampleReducer from './example/reducer';

export default combineReducers({
  example: exampleReducer,
  router: routerStateReducer,
  form: formReducer
});
