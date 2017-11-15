console.log("Hello world!");

var _ = require('lodash');
var chalk = require('chalk');
var json = require('./data/logs.json');

console.log();

_.each([1,2,3], function(element) {
  console.log(element);
});

var logger = {
  log: function(message) {
    console.log(message);
  }
};

module.exports = logger;
