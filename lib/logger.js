var chalked = require('chalk');

var logger = {
  informFunc: function (message) {

    console.log( chalked.blue("The " + message) );
  },
  warningFunc: function (message){

    console.log(chalked.yellow("The " + message) );
  },
  errFunc: function (message){

    console.log(chalked.red("The " + message) );
  },
  loggingFunc: function (message) {

    console.log(message);
  },

  log: function(message, loggingLevel) {
    if (loggingLevel === "info"){
      this.informFunc(message);
    }
    else if (loggingLevel === "warning"){
      this.warningFunc(message);
    }
    else if (loggingLevel === "error"){
      this.errFunc(message);
    }
    else {
      this.loggingFunc(message);
    }
  }
};

module.exports = logger;
