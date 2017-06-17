"use strict";

let chalk = require("chalk");
let _ = require("lodash");

// Test the chalk package first
console.log(chalk.yellow("Hello world!"));

// Tes the lodash package second
let array = [1,2,3,4,5];
_.each(array, function(value){
  console.log("value: " + value);
});


// TIME FOR LOGGING DUTIES
let logger = require("./lib/logger");
logger("Message logged at INFO level", "INFO");
logger("Message logged at WARNING level", "WARNING");
logger("Message logged ERROR level", "ERROR");
