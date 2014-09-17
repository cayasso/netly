'use strict';

/**
 * Module dependencies.
 */

var net = require('net');
var url = require('url');
var address = require('porthost');
var connecting = net.connect;

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
  var res = address(port, host, fn);
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
  var res = address(port, host, fn);
  return connecting.call(net, res.port, res.host, res.fn);
};