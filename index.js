 'use strict';

/**
 * Module dependencies.
 */

//var parse = require('net-connect').parse;
var net = require('net');
var url = require('url');
var connecting = net.connect;
var DEFAULT_HOST = '127.0.0.1';

/**
 * Expose `net`.
 */

module.exports = net;

/**
 * Bind to `port` at `host` and invoke `fn()`.
 *
 * @param {Number|String} port
 * @param {String|Function} [host]
 * @param {Function} [fn]
 * @return {Server}
 * @api public
 */

net.bind = function bind(port, host, fn) {
  var res = parse(port, host, fn);
  var server = net.createServer();
  server.listen(res.port, res.host, res.fn);
  return server;
};

/**
 * Connect to `port` at `host` and invoke `fn()`.
 *
 * Defaults `host` to localhost.
 *
 * @param {Number|String} port
 * @param {String|Function} [host]
 * @param {Function} [fn]
 * @return {Socket}
 * @api public
 */

net.connect = function connect(port, host, fn) {
  var res = parse(port, host, fn);
  return connecting.call(net, res.port, res.host, res.fn);
};

/**
 * Parse arguments.
 *
 * @param {Mixed} obj
 * @param {String|Function} [host]
 * @param {Function} [fn]
 * @return {Object}
 * @api private
 */

function parse(obj, host, fn) {  
  var port;
  switch(typeof obj) {
    case 'object':
      fn = host;
      host = obj.address || obj.host;
      port = obj.port;
      break;
    case 'function':
      fn = obj;
      break;
    case 'number':
      port = obj;
      break;
    case 'string':
      host = obj;
      break;
    case 'undefined':
      break;
    default:
      throw new TypeError;
  }  
  if ('function' === typeof host) {
    fn = host;
    host = null;
  }
  host = host || DEFAULT_HOST;
  obj = url.parse(host);
  if ('string' === typeof obj.port) {
    port = parseInt(obj.port, 10);
  }
  return {
    port: port,
    host: obj.hostname || host,
    fn: fn
  };
}
