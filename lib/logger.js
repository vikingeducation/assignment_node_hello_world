var chalk = require('../node_modules/chalk');

var log = {
	any:function(message,type){
		if(type=="info"){
			console.log(chalk.blue(message));
		}
		else if(type=="warning"){
			console.log(chalk.yellow(message));
		}
		else if(type=="error"){
			console.log(chalk.red(message));
		}
	},
	info:function(message){
		console.log(chalk.blue(message));
	},
	warning:function(message){
		console.log(chalk.yellow(message));
	},
	error:function(message){
		console.log(chalk.red(message));
	},
};

log.any("message logged at info level","info");
log.any("message logged at warning level","warning");
log.any("message logged at error level","error");