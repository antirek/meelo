
var Button = function (settings) {

  var options = settings || {};
  
  var compose = function (renderer) {
    return renderer.button(options);
  };

  return {    
    compose: compose
  }
};

module.exports = Button;