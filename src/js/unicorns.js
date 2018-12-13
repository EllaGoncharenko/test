const $ = require('jquery');

function calcD(a, b, c) {
  return b * b - 4 * a * c;
}


function ShowMeTheTest() {
  const test = calcD(-4, 2, 1);
  $('#one').html(test).css({ color: 'blue', cursor: 'pointer', 'font-size': '20px' });
}
ShowMeTheTest();
