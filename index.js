var Renderer = require('./lib/renderer');

var q = new Renderer();

var Mail = require('./lib/compose/mail');
var Container = require('./lib/compose/container');
var Row = require('./lib/compose/row');


var mail = new Mail({background: '#ddd'});

var container1 = new Container();
var container2 = new Container();

var row1 = new Row({content: 'hello'});
var row2 = new Row({content: 'world'});
var row3 = new Row({content: 'world'});
var row4 = new Row({content: 'world'});

container1.addRow(row1);
container1.addRow(row2);
container2.addRow(row3);
container2.addRow(row4);

mail.addContainer(container1);
mail.addContainer(container2);


var qw = mail.compose(q);
console.log(qw);



/*
var headerOptions = {title: 'Joe'};
var buttonOptions = {action: 'http://www.google.com', title: 'Example action'};
var paragraphOptions = {content: 'hello world'};
var header, layout, button, paragraph, section1, section2;



q.button(buttonOptions)
.then(function (results) {
  button = results;
  return q.header(headerOptions);
})
.then(function (results) {
  header = results;
  //paragraphOptions.content += button;
  //paragraphOptions.content += 'hello world';
  return q.paragraph(paragraphOptions); 
})
.then(function (results) {
  paragraph = results;
  var sectionOptions = {content: "<img src='https://placeholdit.imgix.net/~text?txtsize=36&txt=Cover&w=600&h=200'>", cssClass: 'cover'};
  return q.section(sectionOptions); 
})
.then(function (results) {
  section1 = results; 
  var sectionOptions = {content: header + paragraph + button, cssClass: 'content'};
  return q.section(sectionOptions); 
})
.then(function (results) {
  section2 = results;
  var layoutOptions = {content: section1 + section2};
  return q.layout(layoutOptions); 
})
/*.then(function (results) {
  var defer = new Q.defer();
  var img64 = require('img64');

  img64.encodeImgs(results.html, function (err, string) {;
      defer.resolve(string);
  });
  
  return defer.promise;
})
*/
/*
.then(function (results) {
  //console.log(results.html);

  var juice = require('juice');
  var result = juice(results, {removeStyleTags: false});

  console.log(result);
  /*
  var mailHTML = result;

  var Mailer = require('./lib/mailer');
  var mailer = new Mailer();

  var mailOptions = {
    //from: 'Fred Foo ✔ <foo@blurdybloop.com>', // sender address
    //to: '5c5aebf594@emailtests.com', // list of receivers
    to: 'serge.dmitriev@gmail.com',
    subject: 'Hello Moto', // Subject line
    //text: 'Hello world ✔', // plaintext body
    html: mailHTML  // html body
  };
  return mailer.send(mailOptions);
  */
/*
})
.fail(function (err) {
  console.log(err);
});
*/