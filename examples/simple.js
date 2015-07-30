var Mail = require('../index');

var mail = new Mail({background: '#ddd'});

var header = function () {
  var row = mail.row();
  var column = mail.column({cssClass: 'twelve', extendedCssClass: 'text-pad'});

  column.addContent('h1 Good day, Vasya');

  row.addColumn(column);
  return row;
};

var content = function () {
  var row = mail.row();

  var column1 = mail.column({content: '&nbsp;', cssClass: 'two', extendedCssClass: 'text-pad'});
  var column = mail.column({cssClass: 'eight', extendedCssClass: 'text-pad'});

  var arr = [
    'h3 New updates are available for you!',
    'p All inclusive versions and updates you can download today.'
  ];

  column.addContent(arr);
  column.addContent(mail.button({action: 'http://www.google.com/', title:'Get it!', cssClass:'primary round'}));
  column.addContent('<p>&nbsp;</p>');  
  column.addContent('<img src="http://images5.fanpop.com/image/photos/31000000/Meelo-avatar-the-legend-of-korra-31027849-500-428.png">');

  row.addColumn(column1);
  row.addColumn(column);
  return row;
};

var footer = function () {
  var row = mail.row();
  var column = mail.column({cssClass: 'twelve', extendedCssClass: 'text-pad'});

  column.addContent('<h5>Contact us</h5>');
  column.addContent('<p>Phone: 8 391 2400000</p>');

  row.addColumn(column);
  return row;
};


var container = mail.container({background: '#fff'});

container.addRow(header());
container.addRow(content());
container.addRow(footer());

mail.addContainer(container);

var html = mail.build();




var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    
});

// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols
var mailOptions = {
    to: 'serge.dmitriev@gmail.com', // list of receivers
    subject: 'Hello 2', // Subject line
    //text: , // plaintext body
    html: html // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    //console.log('Message sent: ' + info.response);

});

console.log(html);