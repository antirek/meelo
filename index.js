var Renderer = require('./lib/renderer');
var juice = require('juice');
var q = new Renderer();

var Mail = require('./lib/compose/mail');
var Container = require('./lib/compose/container');
var Row = require('./lib/compose/row');
var Column = require('./lib/compose/column');

var Button = require('./lib/compose/button');

var mail = new Mail({background: '#fff'});

var container1 = new Container({background: '#fff'});
var container2 = new Container({background: '#aaa'});

var row1 = new Row();
var row2 = new Row();
var row3 = new Row();
var row4 = new Row();

var column1 = new Column({content: 'hello', cssClass: 'eight', extendedCssClass: 'text-pad panel'});
var column2 = new Column({cssClass: 'eight'});
var column3 = new Column({cssClass: 'four', extendedCssClass: 'panel', last: 'last'});
var column4 = new Column({content: 'world', cssClass: 'one'});


column2.addContent('<h1>Lopata</h1>');
column2.addContent('<p>Dorem lorem ipsum</p>');

column3.addContent('<h5>Actions</h5>');
column3.addContent('<ul><li>Dorem lorem ipsum</li></ul>');

column2.addContent('<img src="meelo.png">');

var button = new Button({action: 'http://www.google.com', title: 'Google', cssClass: 'secondary round'});
column2.addContent(button);

row1.addColumn(column2);
row1.addColumn(column3);

/*
row2.addColumn(column3);
row2.addColumn(column3);
row2.addColumn(column3);

/*
row3.addColumn(column1);
row3.addColumn(column3);
row3.addColumn(column3);
row3.addColumn(column3);

row4.addColumn(column3);
row4.addColumn(column2);
*/

container1.addRow(row1);
container1.addRow(row2);

container2.addRow(row1);
container2.addRow(row1);

mail.addContainer(container1);
mail.addContainer(container2);

var qw = mail.build(q);

qw = juice(qw);

console.log(qw);