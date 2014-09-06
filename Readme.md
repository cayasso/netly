# netly

[![Build Status](https://travis-ci.org/cayasso/netly.svg?branch=master)](https://travis-ci.org/cayasso/netly)
[![NPM version](https://badge.fury.io/js/netly.svg)](http://badge.fury.io/js/netly)

Make working with net dead simple and slicker.

## Usage

```js
var net = require('netly');

// server
var server = net.bind({ port: 7101, host: '127.0.0.1' });
server.on('connection', function (socket) {
  console.log('incoming connection');
});

// client
var conn = net.connect({ port: 7101, host: '127.0.0.1' });
```

## Installation

```bash
$ npm install netly
```

## API

### net.bind(port, [, listener])

Begin accepting connections on the specified `port` and `host`. 

This method is the equivalent of using `createServer` and `listen` toguether.

These are all supported arguments:

```js

  // port
  var server = net.bind(7101, fn);

  // ":port"
  var server = net.bind(':7101', fn);

  // "host:port"
  var server = net.bind('190.168.1.1:7101', fn);

  // { host, port }
  var server = net.bind({ host: '190.168.1.1', port: 7101 }, fn);

  // { address, port }
  var server = net.bind({ address: '190.168.1.1', port: 7101 }, fn);
```

### net.connect(port, [, listener])

  Create a tcp connection to the address specified by `obj`.

  Optionally pass a `listener` fn to be called when the connection has been
  established.

```js
var net = require('netly');

// port
var con = connect(7101, fn);

// ":port"
var conn = net.connect(':7101', fn);

// "host:port"
var conn = net.connect('190.168.1.1:7101', fn);

// { host, port }
var conn = net.connect({ host: '190.168.1.1', port: 7101 }, fn);

// { address, port }
var conn = net.connect({ address: '190.168.1.1', port: 7101 }, fn);
```

## Run Test

```bash
$ make test
```

## License

(The MIT License)

Copyright (c) 2014 Jonathan Brumley &lt;cayasso@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


