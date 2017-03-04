// var chalk = require('chalk');
// var _ = require('lodash')
// var red = chalk.red;
// var players = [62, 87, 43];
// console.log(red('Hello World!'));
// _.each(players, function (player) {
//   console.log(player);
// });
var logger = require('./lib/logger');
logger.log('I am info', 'INFO');
logger.log('I am a warning', 'WARNING');
logger.log('I am an error', 'ERROR');
