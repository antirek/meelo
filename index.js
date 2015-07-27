var EmailTemplate = require('email-templates').EmailTemplate;
var path = require('path');
var Q = require('q');

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


var headerOptions = {title: 'Joe'};

var buttonOptions = {action: 'http://www.google.com', title: 'Example action'};

var paragraphOptions = {content: 'hello world'};

var header, layout, button, paragraph;

render('button', buttonOptions)
.then(function (results) {
  button = results.html;
  return render('header', headerOptions);
})
.then(function (results) {
  header = results.html;
  paragraphOptions.content += button;
  paragraphOptions.content += 'hello world';
  return render('paragraph', paragraphOptions); 
})
.then(function (results) {
  paragraph = results.html;
  var layoutOptions = {content: header + paragraph + button + button + button + button};
  return render('layout', layoutOptions); 
})
.then(function (results) {
  console.log(results.html);
})
.fail(function (err) {
  console.log(err);
});
