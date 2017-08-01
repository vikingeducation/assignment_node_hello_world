const chalk = require('chalk');
var _ = require('lodash');


const error = chalk.bold.red;
const warning = chalk.keyword('orange');

console.log(error('Error!'));
console.log(warning('Warning!'));


var kitties = {
  "alex": chalk.yellow("orange") + " swirls",
  "zorro": chalk.dim("black"),
  "violet": chalk.bgMagenta("wristkers")
};

_.each(kitties, function(cat){
  console.log(cat);
});

var condiments = ["mustard", "ketchup", "sir kensington's"];

_.each(condiments, function(condiment){
  console.log(condiment);
});