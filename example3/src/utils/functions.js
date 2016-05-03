import _ from 'lodash';
import {bindActionCreators} from 'redux';
import {push} from 'redux-router';
import Qs from 'qs';

export function accountId(id) {
  return 'gdl-' + id;
}

export function stateMapper(state, pathname, name, obj, deep = 0) {
  const params = {};
  if (deep === 0) {
    obj.push('page');
  }
  _.each(obj, (entry) => {
    if (_.isArray(entry)) {
      const deeper = deep + 1;
      stateMapper(state, pathname, name, entry, deeper);
    } else {
      params[entry] = _.get(state.router, ['location', 'query', entry]) ||
        _.get(state, ['reduxRouterReducer', 'routes', pathname, entry]) ||
        _.get(state, ['reduxRouterReducer', 'routes', pathname, name, entry]);
    }
  });
  return _.omit(params, (value)=> {
    return !value;
  });
}

export function pickDeep(collection, predicate, thisArg, ...args) {

  const keys = _.flatten(_.rest(args));
  const newPredicate = (_.isFunction(predicate) ? _.callback(predicate, thisArg) : (key) => {
    return _.contains(keys, key);
  });

  return _.transform(collection, (memo, val, key) => {
    let include = newPredicate(key);
    if (!include && _.isObject(val)) {
      const newVal = pickDeep(val, predicate);
      include = !_.isEmpty(newVal);
    }
    if (include) {
      if (_.isArray(collection)) {
        memo.push(val);
      } else {
        memo[key] = val;
      }
    }
  });
}

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    push: bindActionCreators(push, dispatch)
  };
}

// deep filter, get all values of an attribute in a deep array
export function filterFields(fields, fieldName = 'name', extra = ['page']) {
  const fieldNames = extra;
  const mapper = (allFields) => {
    _.map(allFields, (field, key)=> {
      if (key === fieldName) {
        fieldNames.push(field);
      } else if (_.isObject(field)) {
        mapper(field);
      }
    });
  };

  mapper(fields);
  return fieldNames;
}

// deep filter, get all fields who may submit on its own
export function filterFieldsOnlySelf(fields, fieldName = 'name', extra = ['page']) {
  const fieldNames = extra;
  const mapper = (allFields) => {
    const only = typeof allFields.onlySelf === 'undefined' || allFields.onlySelf === true;
    _.map(allFields, (field, key)=> {
      if (key === fieldName && only === true) {
        fieldNames.push(field);
      } else if (_.isObject(field)) {
        mapper(field);
      }
    });
  };

  mapper(fields);
  return fieldNames;
}

export function createParamsForFetch(state, form, fields) {
  const pathname = state.router.location.pathname;
  const params = {};
  _.map(fields, (field) => {
    params[field] = _.get(state, ['router', 'location', 'query', field]) ||
      _.get(state, ['reduxRouterReducer', 'routes', pathname, form, field]) ||
      _.get(state, ['reduxRouterReducer', 'routes', pathname, field]);
  });
  return _.omit(params, (value)=> {
    return !value;
  });
}

export function createAllParamsForFetch(state) {
  const pathname = state.router.location.pathname;
  const action = state.router.location.action;
  let params;
  if (action === 'POP') {
    params = _.assign(
      Qs.parse(_.get(state, ['router', 'location', 'search'], {}).substr(1))
    );
  } else {
    params = _.assign(
      _.get(state, ['reduxRouterReducer', 'routes', pathname], {}),
      Qs.parse(_.get(state, ['router', 'location', 'search'], {}).substr(1))
    );
  }

  return _.omit(params, (value)=> {
    return !value;
  });
}


export function stringifyState(state, formName, fields) {
  const obj = {};
  _.map(fields, (fieldName) => {
    obj[fieldName] = _.get(state, fieldName) || _.get(state, [formName, fieldName]);
  });
  return Qs.stringify(_.omit(obj, (value)=> {
    return !value;
  }), {encode: false});
}

export function stringifyFullState(state) {
  return Qs.stringify(_.omit(state, (value)=> {
    return !value;
  }), {encode: false});
}


export function filterState(state, formName, fields) {
  const obj = {};
  _.map(fields, (fieldName) => {
    obj[fieldName] = _.get(state, fieldName) || _.get(state, [formName, fieldName]);
  });
  return _.omit(obj, (value)=> {
    return !value;
  });
}

export function intersect(a, b) {
  let ai = 0;
  let bi = 0;
  const result = [];

  while (ai < a.length && bi < b.length) {
    if (a[ai] < b[bi]) {
      ai++;
    } else if (a[ai] > b[bi]) {
      bi++;
    } else {
      result.push(ai);
      ai++;
      bi++;
    }
  }

  return result;
}

export function getActionStatus(props, reducer) {
  return {
    success: _.get(props, [...reducer, 'actionStatus', 'success'], false),
    failed: _.get(props, [...reducer, 'actionStatus', 'failed'], false),
    pending: _.get(props, [...reducer, 'actionStatus', 'pending'], false)
  };
}

export function createMarkup(data) {
  return {__html: data};
}

export function findPage(pages, name) {
  const page = _.find(pages, ['type', name]);
  if (_.isUndefined(page)) {
    return {
      'menu_title': '__UNDEFINED__',
      'slug': '404'
    };
  }
  return page;
}


export function findPageBySlug(pages, name) {
  const page = _.find(pages, ['slug', name]);
  if (_.isUndefined(page)) {
    return {
      'menu_title': '__UNDEFINED__',
      'slug': '404'
    };
  }
  return page;
}
