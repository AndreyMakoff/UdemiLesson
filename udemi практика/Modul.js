'use strict';

const number = 1;

(function () {
  const number = 4;
  console.log(number);
  console.log(number + 3);
})();

console.log(number);

const Mak = (function () {
  const privat = function () {
    console.log('say hellow');
  };
  return {
    sayHellow: privat,
  };
})();

Mak.sayHellow();
