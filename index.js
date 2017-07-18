var _ = require('lodash');
const chalk = require('chalk');

const log = console.log;

log(chalk.blue('Hello ') + 'World' + chalk.red('!'));

var sampleArr = ["this", "is", "a", 6, "index", "array"];

_.each(sampleArr, function(sampleArr) {
  log(sampleArr);
});
