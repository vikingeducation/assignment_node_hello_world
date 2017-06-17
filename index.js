"use strict";

let chalk = require("chalk");
let _ = require("lodash");

// Test the chalk package first
//console.log(chalk.yellow("Hello world!"));

// Tes the lodash package second
/*
let array = [1,2,3,4,5];
_.each(array, function(value){
  console.log("value: " + value);
});
*/

// TIME FOR LOGGING DUTIES
let logger = require("./lib/logger");
let data = require("./data/logs");

_.each(data, function(value){
  logger(value["message"], value["level"]);
});
