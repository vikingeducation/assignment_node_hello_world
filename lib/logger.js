// var Logger = function(){
//   this.log = function(msg, str){
//     if (str === 'INFO'){
//       this.info(msg);
//     }else if (str === 'ERROR'){
//       this.error(msg);
//     }else{
//       this.warning(msg);
//     }
//   },
//   this.info = function(msg){
//     console.log((msg));
//   },
//   this.error = function(msg){
//     console.log(msg);
//   },
//   this.warning = function(msg){
//     console.log(msg);
//   }
// };

var logger = {
  log:function(msg, str){
    if (str === 'INFO'){
      this.info(msg);
    }else if (str === 'ERROR'){
      this.error(msg);
    }else{
      this.warning(msg);
    }
  },
  info:function(msg){
     },
  error:function(msg){
     },
  warning:function(msg){
     }
}

module.exports = logger;
