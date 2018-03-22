import express from 'express';
import webpack from 'webpack';
import { ENV } from './config/appConfig';
import cookie from 'react-cookie';
import config from '../app/config';
import expressConfig from './config/express';
global.__SERVER__ = true;
const App = require('../public/assets/server');
const app = express();
import httpProxy from 'http-proxy';
const targetUrl = 'http://' + config.apiHost + ':' + config.apiPort + '/api';
const proxy = httpProxy.createProxyServer({
  target: targetUrl,
  ws: true
});

proxy.on('error', () => {
  // console.error(e) // this is where the error is thrown
});

if (ENV === 'development') {
  const webpackDevConfig = require('../webpack/webpack.config.dev-client');
  const compiler = webpack(webpackDevConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackDevConfig.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

/*
 * Bootstrap application settings
 */
expressConfig(app);

// Proxy to API server
app.use('/api', (req, res) => {
  proxy.web(req, res, {target: targetUrl});
});

app.use('/upload', (req, res) => {
  res.status(200).send('{"result": {"file_name": "just-a-test-dummy.txt", "file_original_name": "original name"}}');
});


/*
 * This is where the magic happens. We take the locals data we have already
 * fetched and seed our stores with data.
 * App is a function that requires store data and url
 * to initialize and return the React-rendered html string
 */
// app.get('*', App.default);

app.use((req, res) => {
  cookie.plugToRequest(req, res);
  if (typeof(req.headers.cookie) !== 'undefined') {
    cookie.setRawCookie(req.headers.cookie);
  } else {
    // Force empty cookie
    cookie.setRawCookie('');
  }
  return App.default(req, res);
});

app.listen(app.get('port'));
