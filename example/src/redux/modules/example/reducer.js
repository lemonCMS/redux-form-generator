import * as actions from './constants';

const initialState = {
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.EXAMPLE_UPDATE:
      return Object.assign({}, state, Object.assign({}, {actionUpdate: {pending: true}}));
    case actions.EXAMPLE_UPDATE_SUCCESS:
      return Object.assign({}, state, Object.assign({}, {actionUpdate: {pending: false, success: true}}));
    case actions.EXAMPLE_UPDATE_FAIL:
      return Object.assign({}, state, Object.assign({}, {actionUpdate: {pending: false, failed: true}}));
    case actions.EXAMPLE_CLEAR_NETWORK_STATE:
      return Object.assign({}, state, Object.assign({}, {actionUpdate: {}}));
    default:
      return Object.assign({}, state);
  }
}
