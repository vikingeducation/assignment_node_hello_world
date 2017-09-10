
var logger = {
    log: function(message, "INFO","WARNING","ERROR") {
    console.log(message);
  }
};
var infoV = {
    info: function(message) {
    console.log("info");
    }
};

var warningV = {
    warning: function(message) {
    console.log("warning");
    }
};

var errorV = {
    error: function(message) {
    console.log("error");
    }
};

// exports = logger; // Doesn't work! Breaks the reference
// exports.log = logger.log; // Works but eehhh, don't use it
module.exports = logger;









