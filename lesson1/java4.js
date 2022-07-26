const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (i = 0; i < 1; i++) {
  const question1 = prompt('Один из последних просмотренных фильмов'),
    question2 = prompt(' Насколько оцените его');
  if (
    question1 != '' &&
    question2 != '' &&
    question1.length < 50 &&
    question2.length < 50 &&
    question1 != null &&
    question2 != null
  ) {
    personalMovieDB.movies[question1] = question2;
  }
}
if (personalMovieDB.count < 10) {
  console.log('вы слишком мало посмотрели');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log(' мужик');
} else {
  console.log('убирайся');
}

console.log(personalMovieDB);
