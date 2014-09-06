
var net = require('../')

describe('netly', function(){
  it('should have required methods', function(){
    net.bind.should.be.a.Function;
    net.connect.should.be.a.Function;
  });

  describe('netly#bind()', function(){

    it('should bind', function(done){
      var server = net.bind(function(){
        var port = server.address().port;
        net.connect(port).on('connect', done);
      });
    });

    it('should bind with passed port', function(done){
      var server = net.bind(7100, function(){
        var port = server.address().port;
        net.connect(port).on('connect', done);
      });
    });

    it('should bind with passed port and host', function(done){
      var server = net.bind(undefined, '127.0.0.1', function(){
        var port = server.address().port;
        net.connect(port).on('connect', done);
      });
    });

    it('should bind with passing an object', function(done){
      var server = net.bind({ port: 7101, host: '127.0.0.1' }, function(){
        var port = server.address().port;
        net.connect(port).on('connect', done);
      });
    });

  })

  describe('netly#connect()', function(){

    it('should connect with port', function(done){
      var server = net.bind(function(){
        var port = server.address().port;
        net.connect(port).on('connect', done);
      });
    });

    it('should connect with port and host', function(done){
      var server = net.bind(function(){
        var port = server.address().port;
        net.connect(port, '127.0.0.1').on('connect', done);
      });
    });

    it('should connect with passing an object', function(done){
      var server = net.bind(function(){
        var port = server.address().port;
        net.connect({ port: port, host: '127.0.0.1' }).on('connect', done);
      });
    });

    it('should connect and return callback', function(done){
      var server = net.bind(function(){
        var port = server.address().port;
        net.connect({ port: port, host: '127.0.0.1' }, function () {
          done();
        });
      });
    });

  })
})