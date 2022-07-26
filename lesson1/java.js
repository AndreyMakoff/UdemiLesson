// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели');

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// const question1 = prompt('Один из последних просмотренных фильмов');
// const question2 = prompt(' Насколько оцените его');

// personalMovieDB.movies[question1] = question2;

// console.log(personalMovieDB);

// Задача про вывод балов
// const question1 = +prompt('Сколько фильмов вы уже посмотрели');
// const question2 = +prompt('Какова ваша оценка');
// let a = 0;

// if (question1 == 5) {
//   a = a + 1;
// }
// if (question2 == 10) {
//   a = a + 1;
// }
// alert("ваша оценка "+ a);

// const arr = [40, 2, 3, 60, 5, 9, 0, 70];

// function add() {
//   for (i = 0; i < arr.length; i++) {
//     let a = arr.indexOf(arr[i]);
//     console.log(a);
//   }
// }
// add();

let mak = '';
const length = 20;

for (i = 1; i < length; i++) {
  for (j = 0; j < i; j++) {
    mak += '*';
  }
  mak += '\n';
}
console.log(mak);
