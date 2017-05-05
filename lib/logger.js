var chalk = require('chalk');

var logger = {
    log: function(level, message) {
        if (level === "info") {
            console.log(chalk.bgBlue(message));
        } else if (level === "warning") {
            console.log(chalk.bgYellow(message));
        } else if (level === "error") {
            console.log(chalk.bgRed(message));
        }
    }
};

module.exports = logger;
