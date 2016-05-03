import _ from 'lodash';
import * as actions from './constants';

export default {
  dataoverview: (state, action) => { // <------ 'form' is name of form given to connectReduxForm()
    switch (action.type) {
      case actions.UPDATE_REDUX_FORM: {
        const newState = Object.assign({}, state);

        if (action.key !== null) {
          return _.set(newState, action.key + '.' + action.field + '.value', action.value);
        }

        return _.set(newState, action.field + '.value', action.value);
      }
      default: {
        return state;
      }
    }
  }
};
