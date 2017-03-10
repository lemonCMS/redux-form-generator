import _map from 'lodash/map';
import superagent from 'superagent';
import cookie from 'react-cookie';
import qs from 'qs';
import config from '../config';

const methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path) {
  const adjustedPath = path[0] !== '/' ? '/' + path : path;
  if (__SERVER__) {
    // Prepend host and port of the API server to the path.
    return 'http://' + config.apiHost + ':' + config.apiPort + '/api' + adjustedPath;
  }
  // Prepend `/api` to relative URL, to proxy to API server.
  return '/api' + adjustedPath;
}

export default class ApiClient {
  constructor() {
    methods.forEach(method =>
      this[method] = (path, {params, data, headers} = {}) => new Promise((resolve, reject) => {
        console.log('URl', formatUrl(path));

        const request = superagent[method](formatUrl(path));
        if (params) {
          request.query(qs.stringify(params, {encode: false}));
        }

        const token = cookie.load('token');
        if (token) {
          request.set('Authorization', 'Bearer ' + token);
        }

        if (headers !== undefined) {
          _map(headers, (value, key) => {
            request.set(key, value);
          });
        }
        if (data) {
          request.send(data);
        }
        request.end((err, {body} = {}) => {
          return err ? reject(body || err) : resolve(body);
        });
      }));
  }
  /*
   * There's a V8 bug where, when using Babel, exporting classes with only
   * constructors sometimes fails. Until it's patched, this is a solution to
   * "ApiClient is not defined" from issue #14.
   * https://github.com/erikras/react-redux-universal-hot-example/issues/14
   *
   * Relevant Babel bug (but they claim it's V8): https://phabricator.babeljs.io/T2455
   *
   * Remove it at your own risk.
   */
  static empty() {}
}
