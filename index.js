/*jshint esversion: 6 */
const chalk = require('chalk');
var _ = require('lodash');

let arr=["hi", 2, false];

function log(el) {
  console.log(el);
}

console.log(chalk.bgBlue("Blue!"));
_.each(arr, log);
