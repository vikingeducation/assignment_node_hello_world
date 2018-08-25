var _ = require("lodash");
var chalk = require("chalk");

console.log(chalk.blue("yay"));

var names = ["bob", "fred", "will"];

_.each(names, function(name){
  console.log(chalk.blue(name))
})
