const _ = require('./node_modules/lodash');
const chalk = require('./node_modules/chalk');

let testArray = [1, 2, 3, 4, 5];

console.log(chalk.blue("Hello world!"));

_.each(testArray, function(value) {
	console.log(value * 2);
});