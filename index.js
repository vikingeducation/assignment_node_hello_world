
/*
  cd Documents/Viking/Node/hello_world

  https://www.vikingcodeschool.com/dashboard#/professional-development-with-javascript/node-js-hello-world
*/

const chalk = require('chalk');
var _ = require('lodash');
var logger = require("./lib/logger");

console.log("Hello World!");
console.log(_.name);
console.log(chalk.red('chalk'));

_.each([1, 2, 3], function(value) {
  console.log(value);
});

logger.log("test", "info");
logger.log("123", "warn");
logger.log("abc", "error");
