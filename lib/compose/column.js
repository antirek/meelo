
var jade = require('jade');

var Column = function (settings) {
  
  var options = settings || {};
  var items = [];
  var last = false;

  var addContent = function (item) {
    if (Array.isArray(item)) {
      item.forEach(function (element) {
        items.push(element);
      })
    } else {
      items.push(item);
    }
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
              return jade.render(item.toString(), {compileDebug: false});
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