var _ = require("lodash");
const chalk = require("chalk");
var logger = require("./lib/logger");
var logs = require("./data/logs");

_(logs).each((entry) => logger.log(entry.message, entry.level));
