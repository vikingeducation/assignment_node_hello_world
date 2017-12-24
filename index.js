const chalk = require('chalk');
const _ = require('lodash');

const testArray = [
  'first',
  'second',
  'third'
];

console.log( chalk.green(`Hello World!`) );

_.each( testArray, value => {
  console.log( value );
});
