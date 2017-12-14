var path = require('path');
var webpack = require('webpack');
var styleLintPlugin = require('stylelint-webpack-plugin');
var assetsPath = path.join(__dirname, '..', 'public', 'assets');
var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

var commonLoaders = [
  {
    /*
     * TC39 categorises proposals for babel in 4 stages
     * Read more http://babeljs.io/docs/usage/experimental/
     */
    test: /\.js$|\.jsx$/,
    loader: 'babel-loader',
    // Reason why we put this here instead of babelrc
    // https://github.com/gaearon/react-transform-hmr/issues/5#issuecomment-142313637
    query: {
      presets: ['react-hmre', 'es2015', 'react', 'stage-0'],
      plugins: [
        "transform-runtime",
        "add-module-exports",
        "transform-decorators-legacy",
        "transform-react-display-name"
      ]
    },
    include: path.join(__dirname, '..', 'app'),
    exclude: path.join(__dirname, '..', 'node_modules')
  },
  {
    test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
    loader: 'url',
    query: {
      name: '[hash].[ext]',
      limit: 10000,
    }
  },
  {test: /\.html$/, loader: 'html-loader'},
  { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
  { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
  { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
  { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
  { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
];

var postCSSConfig = function () {
  return [
    require('postcss-import')({
      path: path.join(__dirname, '..', 'app', 'css'),
      addDependencyTo: webpack // for hot-reloading
    }),
    require('postcss-cssnext')({
      browsers: ['> 1%', 'last 2 versions']
    }),
    require('postcss-reporter')({clearMessages: true})
  ];
};

module.exports = {
  // eval - Each module is executed with eval and //@ sourceURL.
  devtool: 'eval-source-map',
  // The configuration for the client
  name: 'browser',
  /* The entry point of the bundle
   * Entry points for multi page app could be more complex
   * A good example of entry points would be:
   * entry: {
   *   pageA: "./pageA",
   *   pageB: "./pageB",
   *   pageC: "./pageC",
   *   adminPageA: "./adminPageA",
   *   adminPageB: "./adminPageB",
   *   adminPageC: "./adminPageC"
   * }
   *
   * We can then proceed to optimize what are the common chunks
   * plugins: [
   *  new CommonsChunkPlugin("admin-commons.js", ["adminPageA", "adminPageB"]),
   *  new CommonsChunkPlugin("common.js", ["pageA", "pageB", "admin-commons.js"], 2),
   *  new CommonsChunkPlugin("c-commons.js", ["pageC", "adminPageC"]);
   * ]
   */
  context: path.join(__dirname, '..', 'app'),
  // Multiple entry with hot loader
  // https://github.com/glenjamin/webpack-hot-middleware/blob/master/example/webpack.config.multientry.js
  entry: {
/*
    app: ['./client', hotMiddlewareScript, 'bootstrap-sass!./theme/bootstrap.config.js']
*/
    app: ['./client', hotMiddlewareScript]
  },
  output: {
    // The output directory as absolute path
    path: assetsPath,
    // The filename of the entry chunk as relative path inside the output.path directory
    filename: '[name].js',
    // The output path from the view of the Javascript
    publicPath: '/assets/'
  },
  module: {
    loaders: commonLoaders.concat([
      {
        test: /\.css$/,
        loader: 'style!css?module&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
      }
    ])
  },
  resolve: {
    root: [path.join(__dirname, '..', 'app')],
    extensions: ['', '.js', '.jsx', '.css'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEVCLIENT__: true,
      __DEVSERVER__: false,
      __DEVTOOLS__: true,
      __SERVER__: false
    }),
    new styleLintPlugin({
      configFile: path.join(__dirname, '..', '.stylelintrc'),
      context: path.join(__dirname, '..', 'app'),
      files: '**/*.?(sa|sc|c)ss'
    })
  ],
  postcss: postCSSConfig
};
