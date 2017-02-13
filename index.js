var _ = require("lodash");
var chalk = require("chalk");

var names = ["Jerry", "Maggie", "Emily"];

_.each(names, function(name) {
  console.log(chalk.cyan("Hello %s!"), name);
});
