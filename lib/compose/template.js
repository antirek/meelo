'use strict';

var Template = function (settings) {

	var options = settings || {};
	options.content = options.content || "";

	var containers = [];

	var addContainer = function (container) {
		containers.push(container);
	};

	var compose = function (renderer) {
		var arr = containers.map(function (container) {
			return container.compose(renderer);
		});
		options.content += arr.join("");
		return renderer.template(options);
	};

	var build = function (renderer) {
		return compose(renderer);
	};

	return {
		addContainer: addContainer,
		build: build
	}
};

module.exports = Template;