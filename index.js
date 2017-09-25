const _ = require('./node_modules/lodash');
const chalk = require('./node_modules/chalk');
const log = require('./lib/logger');

const JSONdata = require('./data/logs.json');

let testArray = [1, 2, 3, 4, 5];

console.log(chalk.blue("Hello world!"));

_.each(testArray, function(value) {
	console.log(value * 2);
});


log("Hello world!", "info");
log("Hello world!", "WArning");
log("Hello world!", "ERROR");

//logging from JSON file
_.each(JSONdata, function(data) {
	log(data.message, data.level);
});