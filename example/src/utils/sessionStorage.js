import DomStorage from './domStorage';

let singleton = null;
if (singleton === null) {
  singleton = new DomStorage(global.sessionStorage);
}

module.exports = singleton;
