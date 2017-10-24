var _ = require('lodash');
const chalk = require('chalk');
var logger = require('./lib/logger');
var messages = require('./data/logs.json');

//chalk works
console.log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));

//lodash works
const array = [1,2,3];

_.each (array, function(n) {
  console.log(`${n} potato`);
})


// testing the logger
logger.log('Messaged logged at ERROR level','error');


// logging from JSON
_.each (messages, function(value) {
  logger.log(value.message, value.level);

});
