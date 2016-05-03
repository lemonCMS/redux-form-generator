const _get = require('lodash/get');
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';
import Helmet from 'react-helmet';
// var Intl = require('intl'); // eslint-disable-line
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
  };

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
          {head.script.toComponent()}
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossOrigin="anonymous" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* styles (will be present only in production with webpack extract text plugin) */}
          {Object.keys(assets.styles).map((style, key) =>
            <link href={assets.styles[style]} key={key} media="screen, projection"
                  rel="stylesheet" type="text/css" charSet="UTF-8"/>
          )}

          {/* (will be present only in development mode) */}
          {/* outputs a <style/> tag with all bootstrap styles + App.scss + it could be CurrentPage.scss. */}
          {/* can smoothen the initial style flash (flicker) on page load in development mode. */}
          {/* ideally one could also include here the style for the current page (Home.scss, About.scss, etc) */}
          {head.link.toComponent()}
        </head>
        <body>
          <div id="reactdata" dangerouslySetInnerHTML={{__html: content}}/>
          <script src="https://code.jquery.com/jquery-2.2.3.min.js" integrity="sha256-a23g1Nt4dtEYOj7bR+vTu7+T8VP13humZFBJNIYoEJo=" crossOrigin="anonymous"></script>
          <script src="//cdn.tinymce.com/4/tinymce.min.js"></script>


          <script dangerouslySetInnerHTML={{__html: `window.__data=${serialize(store.getState())};`}} />
          <script dangerouslySetInnerHTML={{__html: `window.__i18n=${serialize(i18n)};`}} />
          <script src={assets.javascript.vendor}/>
          <script src={assets.javascript.main}/>

        </body>
      </html>
    );
  }
}
