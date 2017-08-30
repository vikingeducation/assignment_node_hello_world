const chalk = require("chalk");            //get chalk

var logger = {
	log: function(message, level){
		//call different method based on log level
		switch(level) {
			case "info": 
				this.info(message);
				break;
			case "warning":
				this.warning(message);
				break;
			case "error":
				this.error(message);
		}

	},
	info: function(message){
		console.log(chalk.blue(message));	//info -> message in blue
	},
	warning: function(message){
		console.log(chalk.yellow(message));	//info -> message in yellow
	},
	error: function(message){
		console.log(chalk.red(message));	//info -> message in red
	}
};

//export logger
module.exports = logger;