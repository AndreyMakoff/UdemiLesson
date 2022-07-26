// function sayHello(name) {
//   console.log(`Привет, ${name}!`);
// }
// sayHello('Andrey');

// function returnNeighboringNumbers(num) {
//   console.log([num - 1, num, num + 1]);
//   return [(num - 1, num, num + 1)];
// }
// returnNeighboringNumbers(5);

function getMathResult(num, times) {
  if (typeof times !== 'number' || times <= 0) {
    console.log(`${num}`);
    return num;
  }
  let str = '';
  for (let i = 1; i <= times; i++) {
    if (i === times) {
      str += `${num * i}`;
    } else {
      str += `${num * i}---`;
    }
  }
  console.log(str);
  return str;
}

getMathResult(10, -4);

// function getMathResult(num, times) {
//   if (typeof times !== 'number' || times <= 0) {
//     return num;
//   }
//   let str = '';
//   for (let i = 1; i <= times; i++) {
//     if (i === times) {
//       str += `${num * i}`;
//       // Тут без черточек в конце
//     } else {
//       str += `${num * i}---`;
//       // Это тоже самое, что и
//       // str = str + num * i + "---"
//     }
//   }
//   console.log(str);
//   return str;
// }
// getMathResult(10, 5);
