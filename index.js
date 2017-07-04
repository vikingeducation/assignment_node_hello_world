var _ = require('lodash');
const chalk = require('chalk');
const log = console.log;

var t = ["Dank", "Memez", "Ahoy!"];
_.each(t, function(t) {
  console.log(t);
})

log(chalk.blue("The smurfs are coming") + "..." + chalk.red("BEWARE!"));
