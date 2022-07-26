// function fac(x) {
//   if (typeof x === 'number') {
//     for (i = 1; i < x; i++) {
//       const factorial = x;
//       factorial *= x * (x - i);
//     }
//     console.log(factorial);
//   } else {
//     console.log('ошибка');
//   }
// }
// fac(5);

// function factorial(n) {
//   if (typeof n !== 'number' || !Number.isInteger(n)) {
//     return 'долбаная ошибка';
//   }
//   if (n >= 1) {
//     return n * factorial(n - 1);
//   } else {
//     return 1;
//   }
// }

// console.log(factorial(7));

const arr = ['a', 'b', 'c'];
const object = { a: 1, b: 2, c: 3 };

const result = arr.map((i) => object[i]);
console.log(object.a);
console.log(result);
