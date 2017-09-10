
var logger = {
  log: function(message) {
    console.log(message);
  }
};

// exports = logger; // Doesn't work! Breaks the reference
// exports.log = logger.log; // Works but eehhh, don't use it
module.exports = logger;









