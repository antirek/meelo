var jade = require('jade');
var path = require('path');
var Q = require('q');

var ElementBuilder = function () {
  var render = function (name, options) {
    var defer = new Q.defer();
    var templateDir = path.join(__dirname, 'templates', name);

    var html = jade.renderFile(templateDir + '/html.jade', options);

    return Q.resolve(html);
  };

  return {
    render: render
  }
};

module.exports = ElementBuilder;