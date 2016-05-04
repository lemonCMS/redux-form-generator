import Express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import config from './config';
import favicon from 'serve-favicon';
import compression from 'compression';
import httpProxy from 'http-proxy';
import path from 'path';
import createStore from './redux/create';
import ApiClient from './helpers/ApiClient';
import Html from './helpers/Html';
import PrettyError from 'pretty-error';
import http from 'http';
// import SocketIo from 'socket.io';
import cookie from 'react-cookie';
import listener from 'redux/listener';
import {ReduxRouter} from 'redux-router';
import createHistory from './helpers/history';
import {reduxReactRouter, match} from 'redux-router/server';
import {Provider} from 'react-redux';
import qs from 'qs';
import getRoutes from './routes';
import getStatusFromRoutes from './helpers/getStatusFromRoutes';
// import { load as loadAuth } from './redux/modules/auth';
import {sync as globSync} from 'glob';
import {readFileSync} from 'fs';
// const Intl = require('intl'); // eslint-disable-line
require('intl');
import {IntlProvider} from 'react-intl';

const pretty = new PrettyError();
const app = new Express();
const server = new http.Server(app);
const proxy = httpProxy.createProxyServer({
  target: 'http://' + config.apiHost + ':' + config.apiPort + '/api',
});
proxy.on('error', () => {
  // console.error(e) // this is where the error is thrown
});

const proxyBin = httpProxy.createProxyServer({
  target: 'http://' + config.apiHost + ':' + config.apiPort + '/bin',
});
proxyBin.on('error', () => {
  // console.error(e) // this is where the error is thrown
});

const proxyImg = httpProxy.createProxyServer({
  target: 'http://' + config.apiHost + ':' + config.apiPort + '/image',
});
proxyImg.on('error', () => {
  // console.error(e) // this is where the error is thrown
});

const translations = globSync('./src/langs/*.json')
    .map((filename) => [
      path.basename(filename, '.json'),
      readFileSync(filename, 'utf8'),
    ])
    .map(([locale, file]) => [locale, JSON.parse(file)])
    .reduce((collection, [locale, messages]) => {
      collection[locale] = messages;
      return collection;
    }, {});

app.use(compression());
app.use(favicon(path.join(__dirname, '..', 'static', 'favicon.ico')));

app.use(Express.static(path.join(__dirname, '..', 'static')));

// Proxy to API server
app.use('/api', (req, res) => {
  proxy.web(req, res);
});

// Proxy to BINARY server
app.use('/bin', (req, res) => {
  proxyBin.web(req, res);
});

// Proxy to BINARY server
app.use('/image', (req, res) => {
  proxyImg.web(req, res);
});


// added the error handling to avoid https://github.com/nodejitsu/node-http-proxy/issues/527
proxy.on('error', (error, req, res) => {

  if (error.code !== 'ECONNRESET') {
    console.error('proxy error', error);
  }
  if (!res.headersSent) {
    res.writeHead(500, {'content-type': 'application/json'});
  }

  const json = {error: 'proxy_error', reason: error.message};
  res.end(JSON.stringify(json));
});

app.use((req, res) => {
  if (__DEVELOPMENT__) {
    // Do not cache webpack stats: the script file would change since
    // hot module replacement is enabled in the development env
    webpackIsomorphicTools.refresh();
  }

  // There is some bug that keeps a cookie in memory while infact there was nog a cookie send.
  // So let see if request headers have a cookie,
  // If not reset cookie.
  cookie.plugToRequest(req, res);
  if (typeof(req.headers.cookie) !== 'undefined') {
    cookie.setRawCookie(req.headers.cookie);
  } else {
    // Force empty cookie
    cookie.setRawCookie('');
  }

  const token = cookie.load('locale');
  const locale = req.query.locale || token || 'nl';
  const messages = translations[locale];

  if (!messages) {
    return res.status(404).send('Locale is not supported.');
  }
  const i18n = {locale, messages};
  cookie.save('locale', locale);

  const client = new ApiClient(req);
  const store = createStore(reduxReactRouter, getRoutes, createHistory, client);
  listener(store);
  function hydrateOnClient() {
    res.send('<!doctype html>\n' +
        ReactDOM.renderToString(<Html assets={webpackIsomorphicTools.assets()} store={store} i18n={i18n}/>));
  }

  if (__DISABLE_SSR__) {
    hydrateOnClient();
    return true;
  }

  store.dispatch(match(req.originalUrl, (error, redirectLocation, routerState) => {
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      console.error('ROUTER ERROR:', pretty.render(error));
      res.status(500);
      hydrateOnClient();
    } else if (!routerState) {
      res.status(500);
      hydrateOnClient();
    } else {
      // Workaround redux-router query string issue:
      // https://github.com/rackt/redux-router/issues/106
      if (routerState.location.search && !routerState.location.query) {
        routerState.location.query = qs.parse(routerState.location.search);
      }

      store.getState().router.then(() => {
        const component = (
            <IntlProvider locale={i18n.locale} messages={i18n.messages}>
              <Provider store={store} key="provider">
                <ReduxRouter/>
              </Provider>
            </IntlProvider>
        );

        const status = getStatusFromRoutes(routerState.routes);
        if (status) {
          res.status(status);
        }
        res.send('<!doctype html>\n' +
            ReactDOM.renderToString(<Html assets={webpackIsomorphicTools.assets()} component={component} store={store}
                                          i18n={i18n}/>));
      }).catch((err) => {
        console.error('DATA FETCHING ERROR:', pretty.render(err));
        res.status(500);
        hydrateOnClient();

      });
    }
  }));
});

if (config.port) {
  server.listen(config.port, (err) => {
    if (err) {
      console.error(err);
    }
    console.info('----\n==> ✅  %s is running, talking to API server on %s.', config.app.title, config.apiPort);
    console.info('==> 💻  Open http://%s:%s in a browser to view the app.', config.host, config.port);
  });
} else {
  console.error('==>     ERROR: No PORT environment variable has been specified');
}
