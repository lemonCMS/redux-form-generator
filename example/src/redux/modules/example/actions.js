import * as actions from './constants';

export function update(params) {
  return {
    types: [actions.EXAMPLE_UPDATE, actions.EXAMPLE_UPDATE_SUCCESS, actions.EXAMPLE_UPDATE_FAIL],
    promise: (client) => client.put('/', {
      data: params
    }),
    payload: params
  };
}


export function clearNetworkState() {
  return {
    type: actions.EXAMPLE_CLEAR_NETWORK_STATE
  };
}
