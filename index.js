var _ = require('lodash');
const chalk = require('chalk');


console.log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));

const array = [1,2,3];

_.each (array, function(n) {
  console.log(`${n} potato`);
})
