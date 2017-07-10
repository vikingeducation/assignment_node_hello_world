var _ = require('lodash');
var chalk = require('chalk');





console.log(chalk.bgBlue('hello world'));

var myArray = ['hello', 'good bye'];

_.each(myArray, function(word){
	console.log(word);
});