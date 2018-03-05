
/*
  cd Documents/Viking/Node/hello_world

  https://www.vikingcodeschool.com/dashboard#/professional-development-with-javascript/node-js-hello-world
*/

const chalk = require('chalk');
var _ = require('lodash');
var logger = require("./lib/logger");
var jason = require("./data/logs");

console.log("Hello World!");
console.log(_.name);
console.log(chalk.red('chalk'));

_.each([1, 2, 3], function(value) {
  console.log(value);
});

logger.log("test", "info");
logger.log("123", "warning");
logger.log("abc", "error");

_.each(jason, function(value, index) {
  logger.log(value.message, value.level);
});
