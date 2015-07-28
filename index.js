var elements = require('./lib/elements');
var Builder = require('./lib/builder');
var Q = require('q');

var q = {};
var builder = new Builder();

elements.map(function (element) {
  q[element.name] = function (options) {
    return builder.render(element.name, options);
  }
});



var headerOptions = {title: 'Joe'};

var buttonOptions = {action: 'http://www.google.com', title: 'Example action'};

var paragraphOptions = {content: 'hello world'};

var header, layout, button, paragraph, section1, section2;

q.button(buttonOptions)
.then(function (results) {
  button = results.html;
  return q.header(headerOptions);
})
.then(function (results) {
  header = results.html;
  //paragraphOptions.content += button;
  //paragraphOptions.content += 'hello world';
  return q.paragraph(paragraphOptions); 
})
.then(function (results) {
  paragraph = results.html;
  var sectionOptions = {content: "<img src='https://placeholdit.imgix.net/~text?txtsize=36&txt=Cover&w=600&h=200'>", cssClass: 'cover'};
  return q.section(sectionOptions); 
})
.then(function (results) {
  section1 = results.html; 
  var sectionOptions = {content: header + paragraph, cssClass: 'content'};
  return q.section(sectionOptions); 
})
.then(function (results) {
  section2 = results.html;
  var layoutOptions = {content: section1 + section2};
  return q.layout(layoutOptions); 
})
.then(function (results) {
  var defer = new Q.defer();
  var img64 = require('img64');

  img64.encodeImgs(results.html, function (err, string) {;
      defer.resolve(string);
  });
  
  return defer.promise;
})
.then(function (result) {
  //console.log(results.html);
  var mailHTML = result;

  var Mailer = require('./lib/mailer');
  var mailer = new Mailer();



  var mailOptions = {
    //from: 'Fred Foo ✔ <foo@blurdybloop.com>', // sender address
    to: 'serge.dmitriev@gmail.com', // list of receivers
    subject: 'Hello Moto', // Subject line
    //text: 'Hello world ✔', // plaintext body
    html: mailHTML  // html body
  };
  return mailer.send(mailOptions);
})
.then(function (result) {
  console.log(result);
})
.fail(function (err) {
  console.log(err);
});
