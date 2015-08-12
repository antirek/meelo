var meelo = require('../index');

var subject = 'Attempl';
var preheader = "Attention! Godzilla. All work fine. We ready meet you";

var mail = meelo.mail({
    background: '#ddd',
    preheader: preheader
  });

var header = function () {
  var row = meelo.row();
  var column = meelo.column({cssClass: 'twelve', extendedCssClass: 'text-pad'});

  column.addContent('h1 Good day, Vasya');

  row.addColumn(column);
  return row;
};

var content = function () {
  var row = meelo.row();

  var column1 = meelo.column({content: '&nbsp;', cssClass: 'two', extendedCssClass: 'text-pad'});
  var column = meelo.column({cssClass: 'eight', extendedCssClass: 'text-pad'});

  var arr = [
    'h3 New updates are available for you!',
    'p All inclusive versions and updates you can download today.',
    {
      'div.red': {
        'h1': 'Hello',
        'p': 'Attention'
      }
    }
  ];

var str = "h3 dsfdf,dsfdf\n" +
          "  p sdfdsfdsf\n" +
          "    a(href='http://www.google.com') Google";

  
  column.addContent(arr);
  column.addContent(str);
  column.addContent(meelo.button({action: 'http://www.google.com/', title:'Get it!', cssClass:'primary round'}));
  column.addContent('br');  
  column.addContent('<img src="http://images5.fanpop.com/image/photos/31000000/Meelo-avatar-the-legend-of-korra-31027849-500-428.png">');

  row.addColumn(column1);
  row.addColumn(column);
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

var container = meelo.container({background: '#fff'});

container.addRow(header());
container.addRow(content());
container.addRow(footer());

mail.addContainer(container);

var html = mail.build();

console.log(html);