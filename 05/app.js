const colorsFirst = ['#001219', '#005f73', '#0a9396', '#94d2bd', '#e9d8a6'];
const colorsSecond = ['#ee9b00', '#ca6702', '#bb3e03', '#ae2012', '#9b2226'];
const bgColor = document.querySelector('body');

const btn = document.getElementById('btn');

function onClick() {
  const pickColorFirst =
    colorsFirst[Math.floor(Math.random() * colorsFirst.length)];
  const pickColorSecond =
    colorsSecond[Math.floor(Math.random() * colorsSecond.length)];
  bgColor.style.background =
    'linear-gradient(30deg, ' + pickColorFirst + ', ' + pickColorSecond + ')';
}

btn.addEventListener('click', onClick);
