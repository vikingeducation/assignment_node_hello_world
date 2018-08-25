var logger = module.exports;
var chalk = require('chalk');

logger.info = function(message){
  console.log( chalk.blue(message) );
};


logger.warning = function(message){
  console.log( chalk.yellow(message) );
};


logger.error = function(message){
  console.log( chalk.red(message) );
};

logger.log = function(message, level){

  if (level === "info") { this.info(message) };
  if (level === "warning") { this.warning(message) };
  if (level === "error") { this.error(message) };

};
