var Mail = require('../index');

var mail = new Mail({background: '#ddd'});

var header = function () {
  var row = mail.row();
  var column = mail.column({cssClass: 'twelve', extendedCssClass: 'text-pad'});

  column.addContent('<h1>Good day, John</h1>');

  row.addColumn(column);
  return row;
};

var content = function () {
  var row = mail.row();
  var column = mail.column({cssClass: 'eight', extendedCssClass: 'text-pad'});

  column.addContent('<p>New updates are available for you!</p>');
  column.addContent(mail.button({action: 'http://www.google.com/', title:'Get it!', cssClass:'primary round'}));
  column.addContent('<p>&nbsp;</p>');  
  column.addContent('<img src="http://yastatic.net/morda-logo/i/arrow2/logo_simple.svg">');

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

console.log(html);