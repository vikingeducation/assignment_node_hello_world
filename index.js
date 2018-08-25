var _ = require("lodash");
var chalk = require("chalk");

console.log(chalk.blue("yay"));

var names = ["bob", "fred", "will"];

_.each(names, function(name){
  console.log(chalk.blue(name))
})

console.log()
console.log()
console.log()
console.log()

//warmup end

var logger = require("./lib/logger");
logger.log('info level', 'info')
logger.log('warning level', 'warning')
logger.log('error level', 'error')
console.log();
logger.info("info");
logger.warning("warning");
logger.error("error");
