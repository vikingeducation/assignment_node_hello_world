
let _ = require("lodash");
let chalk = require("chalk");

console.log(chalk.blue("hello world"));

let simpleArray = [1, 2, 3];

_.each(simpleArray, (num) => {
  console.log(num);
});
