var _ = require('lodash');
var chalk = require('chalk');

ary = [1, 2, "three", "four"];

_.each(ary, function(el){
	console.log(chalk.green(el));
})