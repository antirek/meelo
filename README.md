# meelo
Zurb Ink email HTML template composer for #nodejs

compose beautiful emails so quickly!


## Understanding

Email template have simple structure

Meelo > Container > Row > Column > Content



## Usage

`````
var meelo = new Meelo({background: '#ddd'});

var header = function () {
  var row = meelo.row();
  var column = meelo.column({cssClass: 'twelve', extendedCssClass: 'text-pad'});

  column.addContent('h1 Good day, Vasya');

  row.addColumn(column);
  return row;
};

// add content and footer rows

var container = meelo.container({background: '#fff'});

container.addRow(header());


meelo.addContainer(container);

var html = meelo.build();

`````

see ./examples