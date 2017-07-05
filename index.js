var _ = require('lodash');
const chalk = require('chalk');
const log = console.log;

var t = ["Dank", "Memez", "Ahoy!"];
_.each(t, function(t) {
  console.log(t);
})

log(chalk.blue("The smurfs are coming") + "..." + chalk.red("BEWARE!"));

var logger = require('./lib/logger');

log("hello");
logger.info("hello matez");
logger.log("Hello World!", "INFO");
logger.log("You may have forgotten an s in this line\n'module.export = logger;'", "WARNING");
logger.log("Program received signal SIGBUS, Bus error", "ERROR");
