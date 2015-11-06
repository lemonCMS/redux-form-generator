import { default as _ } from 'lodash';
// var _ = require('lodash');

class DomStorage {

  constructor(storage) {
    this.hasLocalStorageSupport = null;
    this._cache = {};
    this.storage = storage;
  }

  set(key, value) {
    if (this.localStorageHasSupport()) {
      this.storage.setItem(key, JSON.stringify(value));
    } else {
      this._cache[key] = value;
    }
  }

  get(key) {
    if (this.localStorageHasSupport()) {
      try {
        return JSON.parse(this.storage.getItem(key));
      } catch (event) {
        console.error('Could not parse JSON %s for key %s from localstorage. Returning null.', this.storage.getItem(key), key);
        return null;
      }
    } else if (_.has(this._cache, key)) {
      return this._cache[key];
    }

    return undefined;
  }

  has(key) {
    if (this.localStorageHasSupport()) {
      return !!this.storage.getItem(key);
    }

    return _.has(this._cache, key) && !!this._cache[key];
  }

  remove(key) {
    if (this.localStorageHasSupport()) {
      this.storage.removeItem(key);
    } else {
      if (_.has(this._cache, key)) {
        delete this._cache[key];
      }
    }
  }

  localStorageHasSupport() {
    if (this.hasLocalStorageSupport === null) {
      try {
        this.storage.setItem('testKey', 'Value');
        this.storage.removeItem('testKey');
        this.hasLocalStorageSupport = true;
      } catch (event) {
        this.hasLocalStorageSupport = false;
      }
    }
    return this.hasLocalStorageSupport;
  }
}

module.exports = DomStorage;
