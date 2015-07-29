var Mail = require('./index');

var mail = new Mail({background: '#fff'});

var container1 = mail.container({background: '#fff'});
var container2 = mail.container({background: '#aaa'});

var row1 = mail.row();
var row2 = mail.row();
var row3 = mail.row();
var row4 = mail.row();

var column1 = mail.column({content: 'hello', cssClass: 'twelve', extendedCssClass: 'panel'});
var column2 = mail.column({cssClass: 'eight'});
var column3 = mail.column({cssClass: 'four', extendedCssClass: 'panel'});
var column4 = mail.column({content: 'world', cssClass: 'one'});


column2.addContent('<h1>Lopata</h1>');
column2.addContent('<p>Dorem lorem ipsum</p>');

column3.addContent('<h5>Actions</h5>');
column3.addContent('<ul><li>Dorem lorem ipsum</li></ul>');

column2.addContent('<img src="meelo.png">');

var button = mail.button({action: 'http://www.google.com', title: 'Google', cssClass: 'secondary round'});
column2.addContent(button);

row1.addColumn(column2);
row1.addColumn(column3);


row2.addColumn(column1);
//row2.addColumn(column3);
//row2.addColumn(column1);

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

var html = mail.build();

console.log(html);