chalk = require('chalk')
var logger =  {
	log: function(message,level) {
if (level === "info") {
	this.info(message) }
	else if (level === "warning") {
	this.warning(message)
	} else if (level ==="error") {
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