# meelo
Zurb Ink email HTML template composer for #nodejs

compose beautiful emails so quickly!

http://zurb.com/ink/


## Understanding

Email template have simple structure

Meelo > Container > Row > Column > Content


## Install

> npm install meelo --save


## Usage

`````javascript 

var Meelo = require('meelo');
var meelo = new Meelo({background: '#ddd'});

var contentRow = function () {
  var row = meelo.row();
  var column = meelo.column({cssClass: 'twelve', extendedCssClass: 'text-pad'});

  column.addContent('h1 Good day, Meelo!');                 //use jade syntax
  column.addContent('<p>New updates are available!</p>');   //use plain html

  row.addColumn(column);
  return row;
};

var container = meelo.container({background: '#fff'});

container.addRow(contentRow());
meelo.addContainer(container);

var html = meelo.build();

`````

## Examples

see ./examples