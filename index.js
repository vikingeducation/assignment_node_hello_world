
var chalk = require('chalk');
var _ = require('lodash');
var logger = require('./lib/logger');
console.log(chalk.red("Hello world!"));
console.log(chalk.yellow.bold("Welcome to my node.js app"));

var countries = ["Brazil", "Argentina", "Spain", "England"];
_.each(countries, function(country) {
  console.log(country);
});

logger.log("Message logged at INFO level", "INFO");
logger.log("Message logged at WARNING level", "WARNING");
logger.log("Message logged at ERROR level", "ERROR");
