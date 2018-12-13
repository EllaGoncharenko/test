const $ = require('jquery');
// const str = require("./constant");

function show() {
  const str = 'Hello, Ella';
  $('#ella').html(str).css({ color: 'red', cursor: 'pointer', 'font-size': '20px' });
}
show();
