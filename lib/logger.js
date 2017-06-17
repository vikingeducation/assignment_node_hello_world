"use strict";

let chalk = require("chalk");

function log(message, logLevel){
  function info(message){
    console.log(chalk.blue(message));
  }

  function warning(message){
    console.log(chalk.yellow(message));
  }

  function error(message){
    console.log(chalk.red(message));
  }

  if(logLevel === "info"){
    info(message);
  } else if (logLevel === "warning") {
    warning(message);
  } else if (logLevel === "error") {
    error(message);
  } else {
    throw new Error("Incorrect logLevel input");
  }
}

/*
log("Message logged at INFO level", "INFO");
log("Message logged at WARNING level", "WARNING");
log("Message logged ERROR level", "ERROR");
*/

module.exports = log;
