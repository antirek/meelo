var jade = require('jade');
var path = require('path');

var ElementBuilder = function () {
  var render = function (name, options) {
    var templateDir = path.join(__dirname, 'templates', name);

    var html = jade.renderFile(templateDir + '/html.jade', options);

    return html;
  };

  return {
    render: render
  }
};

module.exports = ElementBuilder;