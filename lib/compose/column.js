
var Column = function (settings) {
  
  var options = settings || {};
  var items = [];
  var last = false;

  var addContent = function (item) {
    items.push(item);
  };

  if (options['content']) {
    addContent(options['content']);
  };

  var setLast = function () {
    last = true;
  };

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
      options['last'] = last ? 'last' : (options['last'] ? 'last' : '');
      return renderer.column(options);
  };  

  return {
    addContent: addContent,
    compose: compose,
    setLast: setLast
  };
};

module.exports = Column;