/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const movieDB = {
    movies: [
      'Логан',
      'Лига справедливости',
      'Ла-ла лэнд',
      'Одержимость',
      'Скотт Пилигрим против...',
    ],
  };

  const advertising = document.querySelectorAll('.promo__adv img');
  const poster = document.querySelector('.promo__bg');
  const genre = poster.querySelector('.promo__genre');
  const movesList = document.querySelector('.promo__interactive-list');
  const addform = document.querySelector('form.add'); // обращаемся к форме добавления
  const addInput = document.querySelector('.adding__input'); // обращаемся к форме ввода даннах(input)
  const checkbox = document.querySelector('[type="checkbox"]'); // обращаемся к форме для проставлнения галочки

  // накладываем обработчик событий на ввод данных, но не перезагружаем страницу
  addform.addEventListener('submit', (event) => {
    const favoritefilm = checkbox.checked;
    event.preventDefault();
    let newFilm = addInput.value; // Создаем переменную с введенным значением и обозначем ее галкой
    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
      }
      if (favoritefilm) {
        console.log(' добавляем фильм');
      }
      movieDB.movies.push(newFilm);
      sortArr(movieDB.movies);
      addFilm(movieDB.movies, movesList);
    }

    event.target.reset(); // можно и так очистить ;
  });

  const deletAdd = (arg) => {
    arg.forEach((item) => {
      item.remove();
    });
  };

  const makeChanges = () => {
    genre.textContent = 'Драма';
    poster.style.backgroundImage = 'url("img/bg.jpg")';
  };

  const sortArr = (arr) => {
    arr.sort();
  };

  function addFilm(films, parents) {
    parents.innerHTML = '';
    sortArr(films);
    films.forEach((film, i) => {
      parents.innerHTML += `
      <li class='promo__interactive-item'>
        ${i + 1} ${film}
        <div class="delete"></div>
      </li>`;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);
        addFilm(movieDB.movies, movesList);
      });
    });
  }

  deletAdd(advertising);
  makeChanges();

  addFilm(movieDB.movies, movesList);
});
