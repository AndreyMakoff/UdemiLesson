let numberOfFilms;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB();

function writeYourGenres() {
  for (i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}
writeYourGenres();

console.log(personalMovieDB);

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели');
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели');
  }
}
start();

function remeberMyFilms() {
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
}
remeberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('вы слишком мало посмотрели');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log(' мужик');
  } else {
    console.log('убирайся');
  }

  console.log(personalMovieDB);
}
detectPersonalLevel();
