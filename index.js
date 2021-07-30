var _ = require("lodash");
const chalk = require("chalk");

console.log(chalk.blue("Hello world!"));

_([1, 2, 3]).each((num) => console.log(num));
