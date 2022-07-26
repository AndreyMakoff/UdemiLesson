for (i = 5; i < 11; i++) {
  console.log(i);
}

for (let i = 20; i > 9; i--) {
  if (i === 13) break;

  console.log(i);
}

for (i = 1; i < 11; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

let i = 2;
while (i < 11) {
  if (i % 2 === 0) {
    i++;
    continue;
  } else {
    console.log(i);
  }
  i++;
}

const arr = [];

for (let i = 5; i < 11; i++) {
  arr[i - 5] = i;
}

console.log(arr);
