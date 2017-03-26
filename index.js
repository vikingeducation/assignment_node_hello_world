const chalk = require('chalk');
const _ = require('lodash');

console.log(chalk.blue('Hello world!'));

let arr = [1, 3, 5, 7, 9, 11];

_.each(arr, (value) => {
    console.log(value);
});