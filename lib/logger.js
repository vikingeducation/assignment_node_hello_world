chalk = require('chalk')
var logger =  {
	log: function(message,level) {
if (level === "INFO") {
	this.info(message) }
	else if (level === "WARNING") {
	this.warning(message)
	} else if (level ==="ERROR") {
	  this.error(message)
	};
},
    info: function(message) {
	console.log(chalk.blue(message + " INFO level"));

},
    warning: function(message){
	console.log(chalk.yellow(message + " WARNING level"));
},

    error: function(message) {
	console.log(chalk.red(message + " ERROR level"));
}
};

module.exports = logger