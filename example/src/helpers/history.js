import createBrowserHistory from 'history/lib/createBrowserHistory';
import createMemoryHistory from 'history/lib/createMemoryHistory';
import createHashHistory from 'history/lib/createHashHistory';
import {supportsHistory} from 'history/lib/DOMUtils';

let createHistory;

if (__SERVER__) {
  createHistory = createMemoryHistory;
} else {
  createHistory = supportsHistory() ? createBrowserHistory : createHashHistory;
}

export default createHistory;
