// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//   result[i] = arr[i];
// }

// console.log(result);

// function secondTask() {
//   const data = [5, 10, 'Shopping', 20, 'Homework'];

//   for (let i = 0; i < data.length; i++) {
//     if (typeof data[i] === 'number') {
//       data[i] = data[i] * 2;
//     } else if (typeof data[i] === 'string') {
//       data[i] = `${data[i]} - done`;
//     }
//   }

//   console.log(data);
//   return data;
// }
// secondTask();

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// for (let i = 1; i <= data.length; i++) {
//   result[i - 1] = data[data.length - 1];
// }
// console.log(result);

// function thirdTask() {
//   const data = [5, 10, 'Shopping', 20, 'Homework'];
//   const result = [];

//   for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i];
//   }

//   console.log(result);
//   return result;
// }

// thirdTask();

const lines = 8;
let result = '';

for (let i = 0; i <= lines; i++) {
  for (let j = 0; j < lines - i; j++) {
    result += ' ';
  }
  for (let j = 0; j < 2 * i + 1; j++) {
    result += '*';
  }
  result += '\n';
}

console.log(result);
