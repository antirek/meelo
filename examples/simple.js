var meelo = require('../index');

var subject = 'Attempl';
var preheader = "Attention! Godzilla. All work fine. We ready meet you";

var header = function () {
  var row = meelo.row();
  var column = meelo.column({cssClass: 'twelve', extendedCssClass: 'text-pad'});

  column.addContent('h1 Good day, Meelo');

  row.addColumn(column);
  return row;
};

var content = function () {
  var row = meelo.row();

  var column1 = meelo.column({content: '&nbsp;', cssClass: 'one', extendedCssClass: 'text-pad'});
  var column2 = meelo.column({cssClass: 'ten', extendedCssClass: 'text-pad'});

  var mainText = [
    'h3 New updates are available for you!',
    'p All inclusive versions and updates you can download today.'    
  ];

  column2.addContent(mainText);
  column2.addContent(meelo.button({action: 'http://www.google.com/', title:'Get it now!', cssClass:'primary round'}));
  column2.addContent('hr');  
  column2.addContent('<img src="http://images5.fanpop.com/image/photos/31000000/Meelo-avatar-the-legend-of-korra-31027849-500-428.png">');

  row.addColumn(column1);
  row.addColumn(column2);
  return row;
};

var footer = function () {
  var row = meelo.row();
  var column = meelo.column({cssClass: 'twelve', extendedCssClass: 'text-pad'});

  column.addContent('<h5>Contact us</h5>');
  column.addContent('<p>Phone: 8 391 2400000</p>');

  row.addColumn(column);
  return row;
};


var mail = meelo.mail({
  background: '#ddd',
  preheader: preheader
});

var container = meelo.container({background: '#fff'});

container.addRow(header());
container.addRow(content());
container.addRow(footer());

mail.addContainer(container);

var html = mail.build();

console.log(html);