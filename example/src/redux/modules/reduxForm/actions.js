import * as actions from './constants';

export function updateFieldAttempt(field, value, key = null) {
  return {
    type: actions.UPDATE_REDUX_FORM,
    field: field,
    value: value,
    key: key
  };
}

export function updateField(field, value, key = null) {
  return (dispatch) => {
    return Promise.resolve(dispatch(updateFieldAttempt(field, value, key)));
  };
}
