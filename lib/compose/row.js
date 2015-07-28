
var Row = function (options) {
	
	var compose = function (renderer) {		
		return renderer.row(options);
	};

	return {
		compose: compose
	};
};

module.exports = Row;