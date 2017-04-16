var chalk = require("chalk");
var _ = require("lodash");


var greeting = chalk.bold.blue('Hello ') + chalk.bgCyan('World' + chalk.red('!'));
console.log(greeting);

var myArray = ["Greetings", "to", "you", "dear", "earth!"];

_.each(myArray, function(element) {
    console.log(element);
});
