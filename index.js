const chalk = require("chalk");
const _ = require("lodash");
 
console.log(chalk.blue("Hello world!"));

_.each([1, 2, 3], function(number) {
	console.log(number);
});