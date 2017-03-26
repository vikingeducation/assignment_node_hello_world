const chalk = require('chalk');


const logger = {
    log: (message, level) => {
        switch (level) {
            case "info":
                console.log(chalk.blue(message));
                break;
            case "warning":
                console.log(chalk.yellow(message));
                break;
            case "error":
                console.log(chalk.red(message));
                break;
            default:
                console.log(message);
                break;
        };
    }
}

module.exports = logger;