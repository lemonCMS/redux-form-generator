import _ from 'lodash';
import superagent from 'superagent';
import config from '../config';
import cookie from 'react-cookie';

const methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path) {
  const adjustedPath = path[0] !== '/' ? '/' + path : path;
  if (__SERVER__) {
    // Prepend host and port of the API server to the path.
    return 'http://localhost:' + config.apiPort + '/api' + adjustedPath;
  }
  // Prepend `/api` to relative URL, to proxy to API server.
  return '/api' + adjustedPath;
}

/*
 * This silly underscore is here to avoid a mysterious "ReferenceError: ApiClient is not defined" error.
 * See Issue #14. https://github.com/erikras/react-redux-universal-hot-example/issues/14
 *
 * Remove it at your own risk.
 */
class _ApiClient {
  constructor() {
    methods.forEach((method) =>
      this[method] = (path, { params, data, headers, formData } = {}) => new Promise((resolve, reject) => {
        const request = superagent[method](formatUrl(path));
        if (formData) {

          if (typeof FormData !== 'undefined') {
            const fD = new FormData();
            _.map(formData, (value, key)=> {
              if (value && window.File && window.FileReader && window.FileList && window.Blob && value instanceof FileList) {
                _.map(value, (f, index)=> {
                  if (f && f instanceof File) {
                    fD.append(key + '[' + index + ']', f);
                  }
                });
              } else if (value) {
                fD.append(key, value);
              }
            });
            request.send(fD);
          } else {
            console.log('IE 9 FALLBACK', formData);
            _.map(formData, (value, key)=> {
              console.log(key, value);
            });
          }
        }

        if (params) {
          request.query(params);
        }

        const token = cookie.load('token');
        if (token) {
          request.set('Authorization', 'Bearer ' + token);
        }

        if (headers !== undefined ) {
          for (const key in headers) {
            if (headers.hasOwnProperty(key)) {
              if ((key === 'Authorization' && !token)) {
                request.set(key, headers[key]);
              } else
              if (key !== 'Authorization') {
                request.set(key, headers[key]);
              }
            }
          }
        }

        if (data) {
          request.send(data);
        }

        request.end((err, { body } = {}) => err ? reject(body || err) : resolve(body));
      }));
  }
}

const ApiClient = _ApiClient;

export default ApiClient;
