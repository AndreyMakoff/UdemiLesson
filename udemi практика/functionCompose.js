const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);
const addPrefix = (price) => '$' + String(price);

const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((res, fn) => fn(res), x);

const discountCompose = compose(
  addPrefix,
  normalizePrice,
  divide100,
  multiply20
);

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((res, fn) => fn(res), x);
const discountPipe = pipe(multiply20, divide100, normalizePrice, addPrefix);

console.log(discountPipe(200));
console.log(discountCompose(400));

// const discount = normalizePrice(divide100(multiply20(200)));
function foo(a, b) {
  const [first, second] = a;
  const { eng, ru } = b;

  return `${second}, ${ru}`;
}

const result = foo(['Hello', 'Привет'], { ru: 'Мир', eng: 'World' });
console.log(result);

let c = 4;
function addX(x) {
  return function (n) {
    return n + x;
  };
}

const addThree = addX(3);

let d = addThree(c);
let res = addThree(c);

console.log(res);

function setOptions(height, width, ...additional) {
  console.log(height, width, ...additional);
}
setOptions(400, 500, 'red', 'top');

if (0) {
    console.log('first')
} else if (NaN) {
    console.log('second');
} else if (' ') {
    console.log('third');
} else if (null) {
    console.log('fourth');
}

function getSum(a, b) {
  function sum() {
    console.log(this.a);
    return a + b;
  }

  console.log(sum());
}

getSum(4, 5);