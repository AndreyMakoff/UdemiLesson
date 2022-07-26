'use strict';

const btnPhone = document.querySelector('#iphone'),
  body = document.querySelector('body'),
  btnMacbook = document.querySelector('#macbook'),
  images = document.querySelectorAll('img');

const myAnimation = images[0].animate(
  [
    { transform: 'translateX(0)' },
    { transform: 'translateX(100px)' },
    { transform: 'translateX(-100px)' },
    { transform: 'translateX(0)' },
  ],
  {
    duration: 3000,
    iterations: Infinity,
  }
);

const newbtnPone = document.createElement('img');
newbtnPone.src = 'img/iphone_13.png';
newbtnPone.className = 'image';
body.append(newbtnPone);
console.log(newbtnPone);

let newPhoneAnimation;
btnMacbook.addEventListener('click', () => {
  if (!newPhoneAnimation) {
    newPhoneAnimation = newbtnPone.animate(
      [
        {
          transform: 'translateY(0) rotate(0deg)',
          filter: 'opacity(100%)',
        },
        {
          transform: 'translateY(100px) rotate(90deg)',
          filter: 'opacity(75%)',
        },
        {
          transform: 'translateY(-100px) rotate(180deg)',
          filter: 'opacity(25%)',
        },
        {
          transform: 'translateY(0) rotate(360deg)',
          filter: 'opacity(5%)',
        },
      ],
      {
        duration: 3000,
        iterations: Infinity,
      }
    );
  } else if (newPhoneAnimation.playState === 'paused') {
    newPhoneAnimation.play();
  } else {
    newPhoneAnimation.pause();
  }
});

// let phoneAnimation;

// btnPhone.addEventListener('click', () => {
//   if (!phoneAnimation) {
//     phoneAnimation = images[0].animate(
//       [
//         {
//           transform: 'translateY(0) rotate(0deg)',
//           filter: 'opacity(100%)',
//         },
//         {
//           transform: 'translateY(100px) rotate(90deg)',
//           filter: 'opacity(75%)',
//         },
//         {
//           transform: 'translateY(-100px) rotate(180deg)',
//           filter: 'opacity(25%)',
//         },
//         {
//           transform: 'translateY(0) rotate(360deg)',
//           filter: 'opacity(5%)',
//         },
//       ],
//       {
//         duration: 3000,
//         iterations: Infinity,
//       }
//     );
//   } else if (phoneAnimation.playState === 'paused') {
//     phoneAnimation.play();
//   } else {
//     phoneAnimation.pause();
//   }
// });
