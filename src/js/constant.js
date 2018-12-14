
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
