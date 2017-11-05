const _chalk = require('chalk');
const _lodash = require('lodash');

var salutations = require('./lib/salutations');

var arr = [1,2,3,4];

_lodash.each(arr, function(elem){
  console.log(elem);
})

_lodash.each(salutations, function(salutation){
  console.log(salutation);
});

console.log(_chalk.blue('Hello') + " " + _chalk.red('world!'));

console.log("Node.js says Hello world!");
