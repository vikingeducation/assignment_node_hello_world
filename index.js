const chalk = require('chalk');
const _ = require('lodash');
console.log(chalk.blue("Hello world!"));

let arrayVar = ["hum", "dinger", "squeezy", "frolf"];

_.each(arrayVar, function(value){
	console.log(chalk.red(value));
});
