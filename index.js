const _ = require("./node_modules/lodash");
const chalk = require("./node_modules/chalk");
const logger = require('./lib/logger');
const logs = require('./data/logs');


_.each(logs, function(x){
  let message = logger.log(x.message, x.level);
});
