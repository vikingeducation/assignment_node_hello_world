var chalk = require('chalk')
var logger = {
	log: function(message, level){
	   if(level = "info"){
	   	console.log(chalk.blue(message));
	   }

	   else if (level = "warning"){
	   	console.log(chalk.yellow(message));
	   }

	   else 
	   	console.log(chalk.red(message));
	}

};


module.exports = logger;