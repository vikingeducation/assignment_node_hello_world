var _ = require('lodash');
const chalk = require('chalk');
const log = console.log;

var t = ["Dank", "Memez", "Ahoy!"];
_.each(t, function(t) {
  console.log(t);
})

log(chalk.blue("The smurfs are coming") + "..." + chalk.red("BEWARE!"));

var logger = require('./lib/logger');

logger.log("INFO", "Hello World!" );
logger.log("WARNING", "You may have forgotten an s in this line\n'module.export = logger;'");
logger.log("ERROR", "Program received signal SIGBUS, Bus error");

//using a json file
var data = require('./data/logs');
_.each( data, function(value){
  logger.log(value.level, value.message);
});
