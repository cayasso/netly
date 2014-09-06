var parse = require('net-connect').parse;
var net = require('net');
var connect = net.connect;

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
  var res = format(port, host, fn);
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

net.connect = function connecting(port, host, fn) {
  var res = format(port, host, fn);
  return connect.call(net, res.port, res.host, res.fn);
};

/**
 * Format arguments.
 *
 * @param {Number|String} port
 * @param {String|Function} [host]
 * @param {Function} [fn]
 * @return {Object}
 * @api private
 */

function format(port, host, fn) {
  var obj = {};
  
  if ('function' === typeof port) {
    fn = port;
    port = undefined;
  } else if ('object' === typeof port) {
    obj = port;
    fn = host;
    port = undefined;
    host = undefined;
  }

  if ('function' === typeof host) {
    fn = host;
    host = undefined;
  }

  obj.port = obj.port || port;
  obj.host = obj.host || host;

  var res = parse(obj);
  res.fn = fn;
  return res;
}
