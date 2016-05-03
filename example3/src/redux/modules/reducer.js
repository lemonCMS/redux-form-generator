import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {routerStateReducer} from 'redux-router';
import reduxFormReducer from './reduxForm/reducer';

export default combineReducers({
  router: routerStateReducer,
  form: formReducer.plugin(reduxFormReducer)
});
