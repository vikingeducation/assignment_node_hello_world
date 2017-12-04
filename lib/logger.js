/*jshint esversion: 6 */
const chalk = require('chalk');

var logger = {
 log: function(message, level) {
   if (level == "INFO"){
     this.info(message);
   } else if (level == "WARNING"){
     this.warning(message);
   } else if (level == "ERROR") {
     this.error(message);
   } else {
     console.log("please input a level");
   }
 },

 info: function(message){
   console.log(chalk.blue(message));
 },

 warning: function(message){
   console.log(chalk.yellow(message));
 },

 error: function(message){
   console.log(chalk.red(message));
 }
};

module.exports = logger;
