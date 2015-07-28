var Renderer = require('./lib/renderer');

var q = new Renderer();

var Mail = require('./lib/compose/mail');
var Container = require('./lib/compose/container');
var Row = require('./lib/compose/row');
var Column = require('./lib/compose/column');


var mail = new Mail({background: '#ddd'});

var container1 = new Container({background: '#fff'});
var container2 = new Container({background: '#aaa'});

var row1 = new Row();
var row2 = new Row();
var row3 = new Row();
var row4 = new Row();


var column1 = new Column({content: 'hello', cssClass: 'three', extendedCssClass: 'panel'});
var column2 = new Column({content: 'world', cssClass: 'four', extendedCssClass: ''});
var column3 = new Column({content: 'world', cssClass: 'three', extendedCssClass: 'panel'});
var column4 = new Column({content: 'world', cssClass: 'one'});


row1.addColumn(column1);
row1.addColumn(column2);
row1.addColumn(column3);
row1.addColumn(column3);

row2.addColumn(column3);
row2.addColumn(column2);

row3.addColumn(column1);
row3.addColumn(column3);
row3.addColumn(column3);
row3.addColumn(column3);

row4.addColumn(column3);
row4.addColumn(column2);

container1.addRow(row1);
container1.addRow(row2);

container2.addRow(row3);
container2.addRow(row4);

mail.addContainer(container1);
mail.addContainer(container2);

var qw = mail.compose(q);

console.log(qw);


