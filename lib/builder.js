var EmailTemplate = require('email-templates').EmailTemplate;
var path = require('path');
var Q = require('q');

var ElementBuilder = function () {
  var render = function (name, options) {
    var defer = new Q.defer();
    var templateDir = path.join(__dirname, 'templates', name);

    var element = new EmailTemplate(templateDir, {juiceOptions: {
      preserveMediaQueries: false,
      removeStyleTags: true
    }});

    element.render(options, function (err, result){
      if (err) {
        defer.reject(err);
      } else {
        defer.resolve(result);
      }
    });

    return defer.promise;
  };

  return {
    render: render
  }
};

module.exports = ElementBuilder;