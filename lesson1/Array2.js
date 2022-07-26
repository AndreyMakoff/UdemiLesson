const someString = 'This is some strange string';

function reverse(str) {
  if (typeof !str === 'string') {
    console.log(Ошибка);
  }
  console.log(str.split('').reverse().join(''));
}
reverse(someString);

// // Решение при помощи цикла
let newStr = '';
for (let i = someString.length - 1; i >= 0; i--) {
  newStr += someString[i];
}
console.log(newStr);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
  let str = '';
  arr.length === 0
    ? (str = 'Нет доступных валют')
    : (str = 'Доступные валюты:\n');

  // arr.forEach(function (curr) {
  //   if (curr !== missingCurr) {
  //     str += `${curr}\n`;
  //   }
  // });

  // // Или
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === missingCurr) {
      continue;
    }
    str += `${arr[i]}\n`;
  }
  console.log(str);
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');
