
const $ = require('jquery');

const a = 'Hello, Ella';

const b = 'Hello, Baby';


function hello() {
  return (`${a} ${b}`);
}
hello();

function ShowMeTheHello() {
  const second = hello();
  $('#second').html(second).css({ color: 'black', cursor: 'pointer', 'font-size': '14px' });
}
ShowMeTheHello();

function Color() {
  $('.b-test').html('<h3 class="b-test_heading">Heading <div>Я зеленый блок</div></h3>');
}
Color();
