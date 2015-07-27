var EmailTemplate = require('email-templates').EmailTemplate;
var path = require('path');


var render = function (name, options, cb) {
  var templateDir = path.join(__dirname, 'templates', name);

  var element = new EmailTemplate(templateDir, {juiceOptions: {
    preserveMediaQueries: false,
    removeStyleTags: false
  }});

  element.render(options, cb);
};


var headerOptions = {title: 'Joe'};

var buttonOptions = {action: 'sad', title: 'Example action'};

var paragraphOptions = {content: 'hello world'};

var header, layout, button, paragraph;

render('button', buttonOptions, function (err, results) {
  button = results.html;
  //console.log(err, results);

  render('header', headerOptions, function (err, results) {
    //console.log(err, results);
    header = results.html;

    render('paragraph', paragraphOptions, function (err, results) {
      //console.log(err, results);

      paragraph = results.html;

      var layoutOptions = {content: header + paragraph + button};

      //console.log('header', header);

      render('layout', layoutOptions, function (err, results) {
        console.log(results.html);
      });

    });
  });
});
