var chalk = require('chalk');
var _ = require("lodash");
var data = require('./data/logs');

_.each(data, function(message){
  console.log(chalk.red(message.level));
});



