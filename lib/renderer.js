var elements = require('./elements');
var Builder = require('./builder');


var Renderer = function() {
	var builder = new Builder();
	var q = {};
	elements.map(function (element) {
  		this[element.name] = function (options) {
    		return builder.render(element.name, options);
  		}
	}, this);
};

module.exports = Renderer;