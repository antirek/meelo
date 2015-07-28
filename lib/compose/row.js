
var Row = function (settings) {

  var options = settings || {};
	
  var columns = [];

  var addColumn = function (column) {
    columns.push(column);
  }

	var compose = function (renderer) {
      var arr = columns.map(function (column) {
          return column.compose(renderer);
      });
      options.content = arr.join("");
      return renderer.row(options);
  };

	return {
    addColumn: addColumn,
		compose: compose
	};
};

module.exports = Row;