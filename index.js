
var EmailTemplate = require('email-templates').EmailTemplate
var path = require('path')

var templateDir = path.join(__dirname, 'templates', 'main')

var main = new EmailTemplate(templateDir, {juiceOptions: {
  preserveMediaQueries: false,
  removeStyleTags: false
}});

var user = {name: 'Joe', pasta: 'spaghetti'}


main.render(user, function (err, results) {
  console.log(results.html);
});