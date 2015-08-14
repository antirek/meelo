var Container = function (settings) {
    
    var options = settings || {};
    options.content = options.content || "";
    
    var rows = [];

    var addRow = function (row) {
        rows.push(row);
    };

    var compose = function (renderer) {
        var arr = rows.map(function (row) {
            return row.compose(renderer);
        });
        options.content += arr.join("");
        return renderer.container(options);
    };

    return {
        addRow: addRow,
        compose: compose
    };
};

module.exports = Container;