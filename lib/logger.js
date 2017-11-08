const chalk = require('chalk');

let logger = {

	info : function (message){
		console.log(chalk.rgb(0,0,255)(message));
	},

	warning : function (message){
		console.log(chalk.rgb(255,255,0)(message));
	},

	error : function (message){
		console.log(chalk.rgb(255,0,0)(message));
	},

	log : function (message, level){
		switch(level){
			case "info":
				this.info(message);
				break;
			case "warning":
				this.warning(message);
				break;
			case "error":
				this.error(message);
				break;
		}
	}
}

module.exports =  logger;
