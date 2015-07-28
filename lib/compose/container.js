
var Container = function (options) {
	
	var compose = function (renderer) {		
		return renderer.container(options);
	};

	return {
		compose: compose
	}
}

module.exports = Container;