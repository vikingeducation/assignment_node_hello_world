var _ = require('lodash');
var logger = require('./lib/logger');
var LogData = require('./data/logs');

// Output log samples manually
logger.log("Here's some info", logger.info);
logger.log("Yikes... a warning", logger.warning);
logger.log("Holy cow! You've got an error!", logger.error);


// Output log data from logs.json
_.each(LogData, function(logItem){
  logger.log(logItem.message, logger[logItem.level]);
});


// ----------SAMPLE CHALK USAGE------------
// const error = chalk.bold.red;
// const warning = chalk.keyword('orange');
// console.log(error('Error!'));
// console.log(warning('Warning!'));

// ----------SAMPLE LODASH USAGE------------
// var kitties = {
//   "alex": chalk.yellow("orange") + " swirls",
//   "zorro": chalk.dim("black"),
//   "violet": chalk.bgMagenta("wristkers")
// };
// _.each(kitties, function(cat){
//   console.log(cat);
// });

// var condiments = ["mustard", "ketchup", "sir kensington's"];
// _.each(condiments, function(condiment){
//   console.log(condiment);
// });