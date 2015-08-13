var jade = require('jade');
var path = require('path');

var elements = require('./elements');

var Renderer = function () {

  var ElementBuilder = function () {

    var render = function (name, options) {
      var elementsDir = path.join(__dirname, 'elements');      
      return jade.renderFile(elementsDir + '/' + name +'.jade', options);
    };

    return {
      render: render
    }
  };

  var builder = new ElementBuilder();

  elements.map(function (element) {
      this[element.name] = function (options) {
        return builder.render(element.name, options);
      }
  }, this);

};

module.exports = Renderer;