var _ = require("lodash");
var logger = require("./lib/logger");

logger.log("test", "info");
logger.log("123", "warning");
logger.log("abc", "error");
