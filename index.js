var logger = require("./lib/logger");
var chalk = require("./node_modules/chalk");
var lodash = require("./node_modules/lodash");

var myA = ["x", "y", "z"];
lodash._.forEach(myA, function(value) {
  console.log(value);
});

logger.log("Hello World!");
console.log(chalk.blue("peekaboo"));
