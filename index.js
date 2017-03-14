var chalk = require("chalk");
var _ = require("lodash");

var testArr = [1, 2, 3, 4, 5, 6];
console.log(chalk.blue("hello world"));
_.each(testArr, function(item) {
  console.log(item);
});
