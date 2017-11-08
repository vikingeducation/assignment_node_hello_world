const chalk = require('chalk');
const _ = require('lodash');
let myPack = require('./lib/logger.js');
let neededJson = require('./data/logs.json');

_.each(neededJson, function(item){
	myPack.log(item.message, item.level);
});
