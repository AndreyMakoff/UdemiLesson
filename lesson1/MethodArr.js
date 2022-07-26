const films = [
  {
    name: 'Titanic',
    rating: 9,
  },
  {
    name: ' Die hard 5',
    rating: 5,
  },
  {
    name: 'Matrix',
    rating: 8,
  },
  {
    name: 'Some bad film',
    rating: 4,
  },
];

function showGoodFilms(arr) {
  return arr.filter((item) => item.rating >= 8);
}

function showListOfFilms(arr) {
  return arr.reduce(
    (sum, curr) => `${typeof sum === 'object' ? sum.name : sum}, ${curr.name}`
  );
}
console.log(showListOfFilms(films));

function setFilmsIds(arr) {
  return arr.map((film, i) => {
    film.id = i;
    return film;
  });
}

console.log(setFilmsIds(films));

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
  // return arr.every((film) => (film.id || film.id === 0 ? true : false));

  return arr.every((film) => film.id || film.id === 0);
}

console.log(checkFilms(tranformedArray));

const checkFilmsNEw = (arr) => arr.every((film) => film.id || film.id === 0);
console.log(checkFilmsNEw(tranformedArray));
