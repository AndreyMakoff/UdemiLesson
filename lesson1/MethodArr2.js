const funds = [
  { amount: -1400 },
  { amount: 2400 },
  { amount: -1000 },
  { amount: 500 },
  { amount: 10400 },
  { amount: -11400 },
];

// const getPositiveIncomeAmount = (data) => {
//   return data
//     .filter((item) => item.amount > 0)
//     .reduce((sum, curr) => sum + curr.amount,0);
// };
// console.log(getPositiveIncomeAmount(funds));

function getPositiveIncomeAmount(arr) {
  return arr
    .filter((item) => item.amount > 0)
    .reduce((sum, curr) => sum + curr.amount, 0);
}

console.log(getPositiveIncomeAmount(funds));

function getTotalIncomeAmount(arr) {
  return arr.some((item) => item.amount < 0)
    ? arr.reduce((sum, curr) => sum + curr.amount, 0)
    : getPositiveIncomeAmount(funds);
}
console.log(getTotalIncomeAmount(funds));

const getPositiveIncomeAmount = (data) => {
  return data
    .filter((item) => item.amount > 0)
    .reduce((acc, curr) => acc + curr.amount, 0);
};

// getPositiveIncomeAmount(funds);

const getTotalIncomeAmount = (data) => {
  return data.some((item) => item.amount < 0)
    ? data.reduce((acc, curr) => acc + curr.amount, 0)
    : getPositiveIncomeAmount(data);
};

// getTotalIncomeAmount(funds);