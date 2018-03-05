
/*
  cd Documents/Viking/Node/hello_world

  https://www.vikingcodeschool.com/dashboard#/professional-development-with-javascript/node-js-hello-world
*/

const chalk = require('chalk');

function log(message, level) {
  if (level == "info") {
    info(message);
  } else if (level == "warn") {
    warn(message);
  } else if (level == "error") {
    error(message);
  }
}

function info(message) {
  console.log(chalk.blue(message));
}

function warn(message) {
  console.log(chalk.yellow(message));
}

function error(message) {
  console.log(chalk.red(message));
}

log("test", "info");
log("123", "warn");
log("abc", "error");
