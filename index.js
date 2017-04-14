var chalk = require('chalk');
var _ = require('lodash');
console.log(chalk.red("Hello world!"));
console.log(chalk.yellow.bold("Welcome to my node.js app"));

var countries = ["Brazil", "Argentina", "Spain", "England"];
_.each(countries, function(country) {
  console.log(country);
});
