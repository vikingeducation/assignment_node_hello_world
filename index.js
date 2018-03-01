var http = require('http');
http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Hello World\n");
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/')


var _ = require('lodash');
var clr = require('chalk');
var logger = require('./lib/logger');
var logs = require('./data/logs');

_.each(logs, function(logs) {
  logger.output(logs.message, logs.level);
});
