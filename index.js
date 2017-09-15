const chalk = require('chalk');
var _ = require('lodash'); // Load the full build of lodash

var logger = require('./lib/logger.js');
var logs = require('./data/logs.json');

//quick test on message + levels
logger.log('fyi', 'info');
logger.log('Warning, warning', 'warning');
logger.log('ERROR! ERROR! ERROR!', 'error');

console.log('=================================');

// iterate over json file
_.forEach(logs,function(logItem) {
	logger.log(logItem.message, logItem.level);
});

/**********************************************************
//
// sample lodash code
//

// merge objects
console.log(
    _.assign({ 'a': 1 }, { 'b': 2 }, { 'c': 3 })
)

// map an array
console.log(
    _.map([1, 2, 3], function(n) { return n * 3; })
)

// DC: use .each over an array
// note: _.each same as _.forEach
_.each([1, 2], function(value) {
  console.log(value);
});
// => Logs `1` then `2`.

_.forEach([1, 2], function(value) {
  console.log(value);
});
// => Logs `1` then `2`.

//
// sample chalk code
//

const log = console.log;
 
// Combine styled and normal strings 
log(chalk.blue('Hello') + 'World' + chalk.red('!'));
 
// Compose multiple styles using the chainable API 
log(chalk.blue.bgRed.bold('Hello world!'));

//DC test
console.log(chalk.green.bgYellow.bold('DC: Hello world!'));
 
// Pass in multiple arguments 
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
 
// Nest styles 
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
 
// Nest styles of the same type even (color, underline, background) 
log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));
 
// Use RGB colors in terminal emulators that support it. 
log(chalk.keyword('orange')('Yay for orange colored text!'));
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));
 
const error = chalk.bold.red;
//const warning = chalk.keyword('orange');
const warning = chalk.bold.yellow;
 
console.log(error('Error!'));
console.log(warning('Warning!'));
//console.log(chalk.yellow('Warning!'));

const name = 'DC';
console.log(chalk.green('Hello %s'), name);
**********************************************************/
