'use strict';

console.log('запрос данных');

const req = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log('подготовка данны');

    const product = {
      name: 'TV',
      price: 200,
    };
    resolve(product);
  }, 2000);
});

req
  .then((product) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        product.status = 'order';
        resolve(product);
      }, 2000);
    })
      .then((data) => {
        data.modify = true;
        return data;
      })
      .then((data) => {
        console.log(data);
      });
  })
  .catch(() => {
    console.log('error');
  })
  .finally(() => {
    console.log('ухххх');
  });
