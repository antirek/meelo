var Renderer = require('./renderer');

var Template = require('./compose/template');

var Container = require('./compose/container');
var Row = require('./compose/row');
var Column = require('./compose/column');
var Button = require('./compose/button');

var juice = require('juice');

var Bobo = function (settings) {
	var template = null;
	var renderer = new Renderer();
	var useJuice = true;

	var createTemplate = function () {
		template = new Template(settings);
	}();

	var button = function (options) {
		return new Button(options);
	};

	var container = function (options) {
		return new Container(options);
	};

	var row = function (options) {
		return new Row(options);
	};

	var column = function (options) {
		return new Column(options);
	};

	var build = function (opts) {
		var html = template.build(renderer);
		return (useJuice) ? juice(html) : html;
	};

	var addContainer = function (container) {
		template.addContainer(container);
	};

	return {
		build: build,
		button: button,
		container: container,
		row: row,
		column: column,
		addContainer: addContainer
	}
};

module.exports = Bobo;