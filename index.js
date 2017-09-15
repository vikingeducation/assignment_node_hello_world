const chalk = require('chalk');

// Load the full build of lodash
var _ = require('lodash');

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

//////////////////////////////////

const log = console.log;
 
// Combine styled and normal strings 
log(chalk.blue('Hello') + 'World' + chalk.red('!'));
 
// Compose multiple styles using the chainable API 
log(chalk.blue.bgRed.bold('Hello world!'));
 
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
 
/*
// ES2015 template literal 
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);
 
// ES2015 tagged template literal 
log(chalk`
CPU: {red ${cpu.totalPercent}%}
RAM: {green ${ram.used / ram.total * 100}%}
DISK: {rgb(255,131,0) ${disk.used / disk.total * 100}%}
`);
*/
 
// Use RGB colors in terminal emulators that support it. 
log(chalk.keyword('orange')('Yay for orange colored text!'));
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));

 
const error = chalk.bold.red;
const warning = chalk.keyword('orange');
 
console.log(error('Error!'));
console.log(warning('Warning!'));

const name = 'Dennis';
console.log(chalk.green('Hello %s'), name);
//=> 'Hello Dennis' 