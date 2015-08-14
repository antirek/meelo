'use strict';

var Row = function (settings) {

  var options = settings || {};
  options.content = options.content || "";

  var columns = [];

  var addColumn = function (column) {
    columns.push(column);
  }

	var compose = function (renderer) {
      var arr = columns.map(function (column, i) {        
          if (i == columns.length - 1) column.setLast();
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