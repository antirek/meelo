
var Column = function (settings) {
  
  var options = settings || {};
  var items = [];

  var addContent = function (item) {
    items.push(item);
  };

  if (options['content']) {
    addContent(options['content']);
  }

  var compose = function (renderer) {
      if (items.length > 0) {
        var arr = items.map(function (item) {
            if (item['compose']) {
              return item.compose(renderer);      
            } else {
              return item.toString();
            }
        });
        options.content = arr.join("");
      }
      return renderer.column(options);
  };  

  return {
    addContent: addContent,
    compose: compose
  };
};

module.exports = Column;