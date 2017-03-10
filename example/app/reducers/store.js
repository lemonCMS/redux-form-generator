import _ from 'lodash';

export const STORE_LIST = 'STORE_LIST';
export const STORE_LIST_SUCCESS = 'STORE_LIST_SUCCESS';
export const STORE_LIST_FAIL = 'STORE_LIST_FAIL';
export const STORE_LIST_CLEAR = 'STORE_LIST_CLEAR';

export const STORE_LIST_ALL = 'STORE_LIST_ALL';
export const STORE_LIST_ALL_SUCCESS = 'STORE_LIST_ALL_SUCCESS';
export const STORE_LIST_ALL_FAIL = 'STORE_LIST_ALL_FAIL';
export const STORE_LIST_ALL_CLEAR = 'STORE_LIST_ALL_CLEAR';

export const STORE_ITEM_LOAD = 'STORE_ITEM_LOAD';
export const STORE_ITEM_LOAD_SUCCESS = 'STORE_ITEM_LOAD_SUCCESS';
export const STORE_ITEM_LOAD_FAIL = 'STORE_ITEM_LOAD_FAIL';
export const STORE_ITEM_CLEAR = 'STORE_ITEM_CLEAR';

export const STORE_SIMPLE_LOAD = 'STORE_SIMPLE_LOAD';
export const STORE_SIMPLE_LOAD_SUCCESS = 'STORE_LOAD_SIMPLE_SUCCESS';
export const STORE_SIMPLE_LOAD_FAIL = 'STORE_LOAD_SIMPLE_FAIL';
export const STORE_SIMPLE_CLEAR = 'STORE_SIMPLE_CLEAR';

export const STORE_ITEM_CREATE = 'STORE_ITEM_CREATE';
export const STORE_ITEM_CREATE_SUCCESS = 'STORE_ITEM_CREATE_SUCCESS';
export const STORE_ITEM_CREATE_FAIL = 'STORE_ITEM_CREATE_FAIL';

export const STORE_ITEM_EDIT = 'STORE_ITEM_EDIT';
export const STORE_ITEM_EDIT_SUCCESS = 'STORE_ITEM_EDIT_SUCCESS';
export const STORE_ITEM_EDIT_FAIL = 'STORE_ITEM_EDIT_FAIL';

export const STORE_ITEM_UPDATE = 'STORE_ITEM_UPDATE';
export const STORE_ITEM_UPDATE_SUCCESS = 'STORE_ITEM_UPDATE_SUCCESS';
export const STORE_ITEM_UPDATE_FAIL = 'STORE_ITEM_UPDATE_FAIL';

export const STORE_ITEM_DELETE = 'STORE_ITEM_DELETE';
export const STORE_ITEM_DELETE_SUCCESS = 'STORE_ITEM_DELETE_SUCCESS';
export const STORE_ITEM_DELETE_FAIL = 'STORE_ITEM_DELETE_FAIL';

export const STORE_ITEM_CLEAR_NETWORK_STATE = 'STORE_ITEM_CLEAR_NETWORK_STATE';

export const STORE_STACK_ITEM_LOAD = 'STORE_STACK_ITEM_LOAD';
export const STORE_STACK_ITEM_LOAD_SUCCESS = 'STORE_STACK_ITEM_LOAD_SUCCESS';
export const STORE_STACK_ITEM_LOAD_FAILED = 'STORE_STACK_ITEM_LOAD_FAILED';
export const STORE_STACK_ITEM_CLEAR = 'STORE_STACK_ITEM_CLEAR';

const reducerIndex = 'store';
const reducerItem = 'item';

export function simpleLoad(key, path, params = {}) {
  return {
    types: [STORE_SIMPLE_LOAD, STORE_SIMPLE_LOAD_SUCCESS, STORE_SIMPLE_LOAD_FAIL],
    key,
    path,
    params,
    promise: client => client.get(path, {
      params: {...params}
    })
  };
}

export function simpleClear(key) {
  return {
    type: STORE_SIMPLE_CLEAR,
    key
  };
}

export function load(key, path, params) {
  return {
    types: [STORE_LIST, STORE_LIST_SUCCESS, STORE_LIST_FAIL],
    key,
    promise: client => client.get(path, {
      params: {
        ...params
      }
    })
  };
}

export function loadAll(key, path) {
  return {
    types: [STORE_LIST_ALL, STORE_LIST_ALL_SUCCESS, STORE_LIST_ALL_FAIL],
    key,
    promise: client => client.get(path, {
      params: {
        'all': true
      }
    })
  };
}

export function clearAll(key) {
  return {
    type: STORE_LIST_ALL_CLEAR,
    key
  };
}

export function update(key, path, id, params) {
  return {
    types: [STORE_ITEM_UPDATE, STORE_ITEM_UPDATE_SUCCESS, STORE_ITEM_UPDATE_FAIL],
    key,
    promise: client => client.put(path + '/' + id, {
      data: params
    }),
    payload: params
  };
}

export function create(key, path, params) {
  return {
    types: [STORE_ITEM_CREATE, STORE_ITEM_CREATE_SUCCESS, STORE_ITEM_CREATE_FAIL],
    key,
    promise: client => client.post(path, {
      data: params
    }),
    payload: params
  };
}

export function post(key, path, params) {
  return {
    types: [STORE_ITEM_CREATE, STORE_ITEM_CREATE_SUCCESS, STORE_ITEM_CREATE_FAIL],
    key,
    promise: client => client.post(path, {
      data: params
    }),
    payload: params
  };
}

export function loadItem(key, path, id, params) {
  return {
    types: [STORE_ITEM_LOAD, STORE_ITEM_LOAD_SUCCESS, STORE_ITEM_LOAD_FAIL],
    key,
    promise: client => client.get(path + '/' + id, {
      params: {
        ...params
      }
    })
  };
}

export function destroyItem(key, path, id) {
  return {
    types: [STORE_ITEM_DELETE, STORE_ITEM_DELETE_SUCCESS, STORE_ITEM_DELETE_FAIL],
    key,
    promise: client => client.del(path + '/' + id)
  };
}

export function clearList(key) {
  return {
    type: STORE_LIST_CLEAR,
    key
  };
}

export function clearItem(key) {
  return {
    type: STORE_ITEM_CLEAR,
    key
  };
}


export function loadStackItem(key, path, id, params) {
  return {
    types: [STORE_STACK_ITEM_LOAD, STORE_STACK_ITEM_LOAD_SUCCESS, STORE_STACK_ITEM_LOAD_FAILED],
    key,
    id,
    promise: client => client.get(path, {
      params: {
        ...params
      }
    })
  };
}

export function clearStackItem(key, id) {
  return {
    type: STORE_STACK_ITEM_CLEAR,
    key,
    id
  };
}

export function clearNetworkState(key) {
  return {
    type: STORE_ITEM_CLEAR_NETWORK_STATE,
    key
  };
}

export function isAllLoaded(key, globalState) {
  return (_.get(globalState, [reducerIndex, key, 'allStatus', 'success'], false));
}

export function isLoaded(key, globalState, params) {
  return (
    _.get(globalState, [reducerIndex, key, 'success'], false) === true &&
    parseInt(_.get(globalState, [reducerIndex, key, 'list', 'current_page'], 1), 10) === parseInt(_.get(params, 'page', null), 10)
  );
}

export function isLoadedSimple(key, globalState, path, params = {}) {
  return (
    _.get(globalState, [reducerIndex, key, 'success'], false) === true &&
    _.get(globalState, [reducerIndex, key, 'path'], null) === path &&
    _.isEqual(
      _.get(globalState, [reducerIndex, key, 'params'], null),
      params
    )
  );
}

export function isLoadedItem(key, globalState, id) {
  return globalState[reducerIndex] && globalState[reducerIndex][key] && globalState[reducerIndex][key][reducerItem] &&
    (
      (globalState[reducerIndex][key][reducerItem].id && parseInt(globalState[reducerIndex][key][reducerItem].id, 10) === parseInt(id, 10))
      ||
      (globalState[reducerIndex][key][reducerItem].data && globalState[reducerIndex][key][reducerItem].data.id && parseInt(globalState[reducerIndex][key][reducerItem].data.id, 10) === parseInt(id, 10))
    )
    ;
}

export function isLoadedItemByString(key, globalState, id) {
  return globalState[reducerIndex] && globalState[reducerIndex][key] && globalState[reducerIndex][key][reducerItem] &&
    ((String(globalState[reducerIndex][key][reducerItem].id) === String(id)
    ) || globalState[reducerIndex][key][reducerItem].failed === true)
    ;
}

/**
 *Reducer
 **/
const initialState = {};

export default function reducer(orgState = initialState, action = {}) {
  const state = Object.assign({}, orgState);
  const key = action.key;
  const keyState = Object.assign({}, _.get(state, key));
  const status = _.get(action, 'error.status', false);
  switch (action.type) {
    case STORE_LIST:
      return Object.assign({}, state, _.set(state, key, Object.assign({}, keyState, {
        pending: true,
        failed: false,
        status: false
      })));
    case STORE_LIST_SUCCESS:
      return Object.assign({}, state, _.set(state, key, Object.assign({}, keyState, {
        list: action.result,
        pending: false,
        success: true,
        failed: false,
        status: false
      })));
    case STORE_LIST_FAIL:
      return Object.assign({}, state, _.set(state, key, Object.assign({}, keyState, {
        pending: false,
        failed: true,
        status: status
      })));

    case STORE_LIST_ALL:
      return Object.assign({}, state, _.set(state, key, Object.assign({}, keyState, {
        all: keyState.all,
        allStatus: {pending: true, status: false}
      })));
    case STORE_LIST_ALL_SUCCESS:
      return Object.assign({}, state, _.set(state, key, Object.assign({}, keyState, {
        all: action.result,
        allStatus: {pending: false, success: true, status: false}
      })));
    case STORE_LIST_ALL_FAIL:
      return Object.assign({}, state, _.set(state, key, Object.assign({}, keyState, {
        all: keyState.all,
        allStatus: {pending: false, failed: true, status: status}
      })));
    case STORE_LIST_ALL_CLEAR:
      return Object.assign({}, state, _.set(state, key, Object.assign({}, keyState, {all: {}})));

    case STORE_ITEM_LOAD:
      return Object.assign({}, state, _.set(state, key, Object.assign({}, keyState, {
        item: Object.assign({}, {
          pending: true,
          status: false
        })
      })));
    case STORE_ITEM_LOAD_SUCCESS:
      return Object.assign({}, state, _.set(state, key, Object.assign({}, keyState, {
        item: Object.assign({}, action.result, {
          pending: false,
          success: true,
          status: false
        })
      })));
    case STORE_ITEM_LOAD_FAIL:
      return Object.assign({}, state, _.set(state, key, Object.assign({}, keyState, {
        item: {
          pending: false,
          failed: true,
          status: status
        }
      })));

    case STORE_ITEM_DELETE:
      return Object.assign({}, state, _.set(state, key, Object.assign({}, keyState, {
        item: Object.assign({}, {
          pending: true,
          status: false
        })
      })));
    case STORE_ITEM_DELETE_SUCCESS:
      return Object.assign({}, state, _.set(state, key, Object.assign({}, keyState, {
        item: Object.assign({}, {
          pending: false,
          deleted: true,
          status: false
        })
      })));
    case STORE_ITEM_DELETE_FAIL:
      return Object.assign({}, state, _.set(state, key, Object.assign({}, keyState, {
        item: Object.assign({}, {
          pending: false,
          failed: true,
          error: status
        })
      })));

    case STORE_ITEM_UPDATE:
      return Object.assign({}, state, _.set(state, key, Object.assign({}, keyState, {
        item: Object.assign({}, keyState.item, {
          actionStatus: {
            pending: true,
            status: false,
            success: false,
            failed: false
          }
        })
      })));
    case STORE_ITEM_UPDATE_SUCCESS:
      return Object.assign({}, state, _.set(state, key, Object.assign({}, keyState, {
        item: Object.assign({}, action.result, {
          actionStatus: {
            pending: false,
            success: true,
            failed: false,
            status: false
          }
        })
      })));
    case STORE_ITEM_UPDATE_FAIL:
      return Object.assign({}, state, _.set(state, key, Object.assign({}, keyState, {
        item: Object.assign({}, keyState.item, {
          actionStatus: {
            pending: false,
            success: false,
            failed: true,
            status: status
          }
        })
      })));

    case STORE_ITEM_CREATE:
      return Object.assign({}, state, _.set(state, key, Object.assign({}, keyState, {
        item: Object.assign({}, {
          actionStatus: {
            pending: true,
            failed: false,
            success: false
          }
        })
      })));
    case STORE_ITEM_CREATE_SUCCESS:
      return Object.assign({}, state, _.set(state, key, Object.assign({}, keyState, {
        item: Object.assign({}, action.payload, action.result, {
          actionStatus: {
            pending: false,
            success: true,
            status: false
          }
        })
      })));
    case STORE_ITEM_CREATE_FAIL:
      return Object.assign({}, state, _.set(state, key, Object.assign({}, keyState, {
        item: Object.assign({}, {
          actionStatus: {
            pending: false,
            failed: true,
            success: false
          }
        })
      })));

    case STORE_LIST_CLEAR:
      return Object.assign({}, state, _.set(state, key, Object.assign({}, keyState, {list: {}})));
    case STORE_ITEM_CLEAR:
      return Object.assign({}, state, _.set(state, key, Object.assign({}, keyState, {item: {}})));
    case STORE_ITEM_CLEAR_NETWORK_STATE:
      return Object.assign({}, state, _.set(state, key, Object.assign({}, keyState, {item: Object.assign({}, keyState.item, {actionStatus: {}})})));

    case STORE_STACK_ITEM_LOAD: {
      const stack = _.clone(_.get(state, [key, 'stack'], {}));
      stack[action.id] = (Object.assign({}, {pending: true, success: false}));
      return Object.assign({}, state, _.set({}, [key, 'stack'], stack));
    }

    case STORE_STACK_ITEM_LOAD_SUCCESS: {
      const stack = _.clone(_.get(state, [key, 'stack'], {}));
      stack[action.id] = (Object.assign({}, action.result, {pending: false, success: true}));
      return Object.assign({}, state, _.set({}, [key, 'stack'], stack));
    }
    case STORE_STACK_ITEM_LOAD_FAILED: {
      const stack = _.clone(_.get(state, [key, 'stack'], {}));
      stack[action.id] = (Object.assign({}, {pending: false, failed: true}));
      return Object.assign({}, state, _.set({}, [key, 'stack'], stack));
    }
    case STORE_STACK_ITEM_CLEAR: {
      const stack = _.omit(_.clone(_.get(state, [key, 'stack'], {})), action.id);
      return Object.assign({}, state, _.set({}, [key, 'stack'], stack));
    }

    case STORE_SIMPLE_LOAD:
      return Object.assign({}, state, _.set(state, key, Object.assign({}, {
        pending: true,
        success: false,
        failed: false
      })));
    case STORE_SIMPLE_LOAD_SUCCESS:
      return Object.assign({}, state, _.set(state, key, Object.assign({}, action.result, {
        path: action.path,
        params: action.params,
        pending: false,
        success: true,
        failed: false
      })));
    case STORE_SIMPLE_LOAD_FAIL:
      return Object.assign({}, state, _.set(state, key, Object.assign({}, {
        pending: false,
        success: false,
        failed: true
      })));
    case STORE_SIMPLE_CLEAR:
      return Object.assign({}, state, _.set(state, key, {}));

    default:
      return Object.assign({}, state);
  }
}
