var chalk = require('chalk');

var logger = {
    log: function(message, level) {
        var coloredMessage;
        switch(level){
            case "INFO":
                coloredMessage = chalk.bold.blue(message);
                break;
            case "WARNING":
                coloredMessage = chalk.bold.yellow(message);
                break;
            case "ERROR":
                coloredMessage = chalk.bold.red(message);
                break;
            default:
                coloredMessage = chalk.bold.white(message);
        }
        console.log(coloredMessage);
    },

    info: function(message) {
        console.log(chalk.bold.blue(message));
    },

    warning: function(message) {
        console.log(chalk.bold.yellow(message));
    },

    error: function(message) {
        console.log(chalk.bold.red(message));
    }
};

module.exports = logger;