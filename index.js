var _ = require('lodash');
const chalk = require('chalk');
var logger = require('./lib/logger')

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


logger.log('Messaged logged at ERROR level','ERROR');
