var chalk = require("chalk");
var _ = require("lodash");
var logger = require('./lib/logger');


var greeting = chalk.bold.blue('Hello ') + chalk.bgCyan('World' + chalk.red('!'));
console.log(greeting);

var myArray = ["Greetings", "to", "you", "dear", "earth!"];

_.each(myArray, function(element) {
    console.log(element);
});

logger.log("Hola, mundo!", "INFO");
logger.log("Bonjour, monde!", "WARNING");
logger.log("Hallo, welt!", "ERROR");

logger.info("Hola, mundo!");
logger.warning("Bonjour, monde!");
logger.error("Hallo, welt!", "ERROR");