var $ = require('jquery');
var str = require('./constant');

function show () {
    console.log(str);
    $('body').html(str).css({ 'color':'red', 'cursor':'pointer', 'font-size': '14px' });
}
show ();


