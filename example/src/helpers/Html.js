import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';
const cdn = '//cdnjs.cloudflare.com/ajax/libs/';
import Helmet from 'react-helmet';
var Intl = require('intl'); // eslint-disable-line
/**
 * Wrapper component containing HTML metadata and boilerplate tags.
 * Used in server-side code only to wrap the string output of the
 * rendered route component.
 *
 * The only thing this component doesn't (and can't) include is the
 * HTML doctype declaration, which is added to the rendered output
 * by the server.js file.
 */
export default class Html extends Component {
  static propTypes = {
    assets: PropTypes.object,
    component: PropTypes.node,
    store: PropTypes.object,
    i18n: PropTypes.object
  }

  render() {
    const {assets, component, store, i18n} = this.props;
    const content = component ? ReactDOM.renderToString(component) : '';
    const head = Helmet.rewind();
    return (
      <html lang="en-us">
        <head>
          <meta charSet="utf-8"/>
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}

          <link rel="shortcut icon" href="/favicon.ico" />
          <link href={cdn + 'font-awesome/4.4.0/css/font-awesome.min.css'}
                media="screen, projection" rel="stylesheet" type="text/css" />

        </head>
        <body>
          <div id="reactdata" dangerouslySetInnerHTML={{__html: content}}/>
          <script type="text/javascript" src="/plupload-2.1.8/js/plupload.full.min.js"></script>
          <script src="https://cdn.polyfill.io/v1/polyfill.min.js?features=Intl.~locale.en,Intl.~locale.nl"></script>
          <script dangerouslySetInnerHTML={{__html: `window.__data=${serialize(store.getState())};`}} />
          <script dangerouslySetInnerHTML={{__html: `window.__i18n=${serialize(i18n)};`}} />
          <script src={assets.javascript.vendor}/>
          <script src={assets.javascript.main}/>
        </body>
      </html>
    );
  }
}
