const ans = prompt('ведите Ваше имя');

const reg = /\d/g;
console.log(ans.match(reg));

// i- ищет внезависимости от реггистра;
// g-сразу несколько значений;
// m- многострочный режим;

// \d- цифры , \w- все слова, \s -пробелы
// \D-не числа, \W- не буквы

// console.log(ans.match(reg));
// все элементы через реплейс
// console.log(ans.replace(/./g, '&'));
//  замена элементв
// console.log(ans.replace(/\./g, '&'));
