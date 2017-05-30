const chalk = require('chalk');
const _ = require('lodash');

console.log(chalk.blue('Hello world!'));

const arr = [1, 2, 3, 4, 5];

_.each(arr, (value) => console.log(value));