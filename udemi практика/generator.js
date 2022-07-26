function* generator() {
  yield '1';
  yield '2';
  yield '3';
  yield '4';
}

const mak = generator();

console.log(mak.next().value);
console.log(mak.next().value);
console.log(mak.next().value);
console.log(mak.next().value);
console.log(mak.next().value);

function* count(n) {
  for (i = 0; i < n; i++) {
    yield i;
  }
}

const str = count();

for (let k of count(5)) {
  console.log(k);
}

function* generator(n) {
  for (i = 0; i < 10; i++) {
    yield i;
  }
}

for (let k of generator
  (5)) {
  console.log(k);
}

// let a = {},
//   b = { key: 'b' },
//   c = { andrey: 'c' };
// d = { asd: 'd' };

// a[b] = 1;

// a[c] = 3;

// a[d] = 4;

// console.log(a[b]);
