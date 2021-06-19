'use strict';

// const btns = document.querySelectorAll('button');

// for (const btn of btns) {
//   btn.addEventListener('click', ({ target }) => {
//     console.dir(target.dataset.host);
//     // console.dir(target.dataset.button - color); // wrong
//     console.dir(target.dataset.buttonColor);
//     // console.dir(target.dataset.firstName); // wrong
//     console.dir(target.dataset.firstname);
//   });
// }

// Создать div с 5 кнопками.
// Менять цвет дива в зависимости от того, на какую кнопку нажали
const btns = document.querySelectorAll('button');

const div = document.querySelector('div');

// for (const btn of btns) {
//   btn.addEventListener(
//     'click',
//     ({
//       target: {
//         dataset: { color },
//       },
//     }) => {
//       div.style.backgroundColor = color;
//     }
//   );
// }

for (const btn of btns) {
  btn.addEventListener('click', changeDivColorHandler);
}

function changeDivColorHandler({
  target: {
    dataset: { color },
  },
}) {
  div.style.backgroundColor = color;
}
