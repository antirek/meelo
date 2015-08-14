var Renderer = require('../lib/renderer');
var renderer = new Renderer();

describe('Elements render', function () {

  it('compose button html', function (done) {

    var button = new require('../lib/compose/button')({
      action: 'http://www.google.com/', 
      title:'Get it!', 
      cssClass:'primary round'
    });

    var button_html = '<table class="button primary round"><tr><td><a href="http://www.google.com/">Get it!</a></td></tr></table>';

    var html = button.compose(renderer);
    expect(html).toEqual(button_html);
    done();

  });

  it('compose column html', function (done) {

    var column = new require('../lib/compose/column')({
      content: '<p>Content</p>'      
    });

    var column_html = '<td class="wrapper  undefined"><table class="columns undefined"><tr><td class="undefined"><p>Content</p></td><td class="expander"></td></tr></table></td>';

    var html = column.compose(renderer);
    expect(html).toEqual(column_html);
    done();

  });

  it('compose container html', function (done) {

    var container = new require('../lib/compose/container')();

    var container_html = '<tr><td align="center" valign="top" class="center"><center><table style="background:undefined;" class="container"></table></center></td></tr>';

    var html = container.compose(renderer);
    expect(html).toEqual(container_html);
    done();

  });

});