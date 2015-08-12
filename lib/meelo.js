var Renderer = require('./renderer');

var Template = require('./compose/template');

var Container = require('./compose/container');
var Row = require('./compose/row');
var Column = require('./compose/column');
var Button = require('./compose/button');

var juice = require('juice');

var Meelo = {
	mail: function (settings) {
		var template = null;
		var renderer = new Renderer();
		var useJuice = true;

		var createTemplate = function () {
			template = new Template(settings);
		}();

		var prepareJuice = function (html) {
			return juice(html, {
				//removeStyleTags: false
			});
		};

		var build = function (opts) {
			var html = template.build(renderer);
			return (useJuice) ? prepareJuice(html) : html;
		};

		var addContainer = function (container) {
			template.addContainer(container);
		};

		return {
			build: build,
			addContainer: addContainer
		}
	},
	button: function (options) {
		return new Button(options);
	},
	container: function (options) {
		return new Container(options);
	},
	row: function (options) {
		return new Row(options);
	},
	column: function (options) {
		return new Column(options);
	}
};

module.exports = Meelo;