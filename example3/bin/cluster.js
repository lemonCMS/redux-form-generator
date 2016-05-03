#!/usr/bin/env node
require('../server.babel'); // babel registration (runtime transpilation for node)
// http://tostring.it/2014/06/03/how-to-configure-a-cluster-with-node-js/
var cluster = require('cluster');
var http = require('http');

if (cluster.isMaster) {

  console.log("Master pid: " + process.pid);

  var numberOfRequests = 0;

  var numCPUs = require('os').cpus().length;
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  Object.keys(cluster.workers).forEach(function(id) {
    console.log('creating process with id = ' + cluster.workers[id].process.pid);

    //getting message
    cluster.workers[id].on('message', function messageHandler(msg) {
      if (msg.cmd && msg.cmd == 'notifyRequest') {
        numberOfRequests += 1;
      }

      console.log("Getting message from process : ", msg.procId);
    });

    //Getting worker online
    cluster.workers[id].on('online', function online()
    {
      console.log("Worker pid: " + cluster.workers[id].process.pid + " is online");
    });

    //printing the listening port
    cluster.workers[id].on('listening', function online(address)
    {
      console.log("Listening on port + " , address.port);
    });

    //Catching errors
    cluster.workers[id].on('exit', function(code, signal) {
      if( signal ) {
        console.log("worker was killed by signal: "+signal);
      } else if( code !== 0 ) {
        console.log("worker exited with error code: "+code);
      } else {
        console.log("worker success!");
      }
    });
  });

/*  //Printing number of requests
  setInterval(function(){
    console.log("Handled " + numberOfRequests + " requests");
  }, 3000);*/

} else {
  require('../server.babel'); // babel registration (runtime transpilation for node)
  var path = require('path');
  var rootDir = path.resolve(__dirname, '..');
  /**
   * Define isomorphic constants.
   */
  global.__CLIENT__ = false;
  global.__SERVER__ = true;
  global.__DISABLE_SSR__ = false;  // <----- DISABLES SERVER SIDE RENDERING FOR ERROR DEBUGGING
  global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

  if (__DEVELOPMENT__) {
    if (!require('piping')({
        hook: true,
        ignore: /(\/\.|~$|\.json|\.scss$)/i
      })) {
      return;
    }
  }

// https://github.com/halt-hammerzeit/webpack-isomorphic-tools
  var WebpackIsomorphicTools = require('webpack-isomorphic-tools');
  global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('../webpack/webpack-isomorphic-tools'))
    .development(__DEVELOPMENT__)
    .server(rootDir, function() {
      require('../src/server');
    });
}