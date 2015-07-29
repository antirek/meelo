
var Mail = function (settings) {

	var options = settings || {};
	var containers = [];

	var addContainer = function (container) {
		containers.push(container);
	};

	var compose = function (renderer) {
		var arr = containers.map(function (container) {
			return container.compose(renderer);
		});
		options.content = arr.join("");
		return renderer.layout(options);
	};

	var build = function (renderer) {
		compose(renderer);
	}

	return {
		addContainer: addContainer,
		compose: compose
	}
}

module.exports = Mail;