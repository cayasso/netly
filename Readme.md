
[![Build Status](https://circleci.com/gh/segmentio/net-connect.png?circle-token=e9452b79ec91e7630f5a65e7be03fcdbddd5079d)](https://circleci.com/gh/segmentio/net-connect)

# netly

  Make working with net dead simple and slicker.

## Example

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
  var server = net.bind(1337, fn);

  // ":port"
  var server = net.bind(':1337', fn);

  // "host:port"
  var server = net.bind('1.2.3.4:1337', fn);

  // { host, port }
  var server = net.bind({ host: '1.2.3.4', port: 1337 }, fn);

  // { address, port }
  var server = net.bind({ address: '1.2.3.4', port: 1337 }, fn);
```

### net.connect(port, [, listener])

  Create a tcp connection to the address specified by `obj`.

  Optionally pass a `listener` fn to be called when the connection has been
  established.

```js
var net = require('netly');

// port
var con = connect(1337, fn);

// ":port"
var conn = net.connect(':1337', fn);

// "host:port"
var conn = net.connect('1.2.3.4:1337', fn);

// { host, port }
var conn = net.connect({ host: '1.2.3.4', port: 1337 }, fn);

// { address, port }
var conn = net.connect({ address: '1.2.3.4', port: 1337 }, fn);
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


