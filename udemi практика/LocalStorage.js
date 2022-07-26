'use strict';

// localStorage.setItem('number', 5);

// // localStorage.removeItem('number');
// console.log(localStorage.getItem('number'));
// localStorage.clear();

const checkbox = document.querySelector('#checkbox');
const form = document.querySelector('form');
const button = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
  checkbox.checked = true;
}
if (localStorage.getItem('bg') === 'changed') {
  form.style.backgroundColor = 'green';
}

if (localStorage.getItem('bg') === 'changed') {
  localStorage.removeItem('bg');
}

checkbox.addEventListener('change', () => {
  localStorage.setItem('isChecked', true);
});

button.addEventListener('click', () => {
  if (localStorage.getItem('bg') === 'changed') {
    localStorage.removeItem('bg');
    form.style.backgroundColor = 'green';
  } else {
    localStorage.setItem('bg', 'changed');
  }
  form.style.backgroundColor = 'red';
});

const person = {
  afe: 'Alex',
  page: '2',
};

const nexPerson = JSON.stringify(person);
// console.log(nexPerson);

localStorage.setItem('alex', nexPerson);

console.log(JSON.parse(localStorage.getItem('alex')));
