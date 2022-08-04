const colors = ['#55efc4', '#74b9ff', '#a29bfe', '#fd79a8'];
// const window = document.querySelector("html");
const greeting = document.querySelector('h3');

// let isEntering = false;

function onMouseEnter(event) {
  greeting.style.color = colors[0];
  greeting.innerText = 'What? Stranger';
}

function onMouseLeave(event) {
  greeting.style.color = colors[1];
  greeting.innerText = 'Good Bye, Stranger';
}

function onResizePage(event) {
  greeting.style.color = colors[2];
  greeting.innerText = 'Resize a page';
}

function onRightClick(event) {
  greeting.style.color = colors[3];
  greeting.innerText = 'Right Click';
}

greeting.addEventListener('mouseenter', onMouseEnter);
greeting.addEventListener('mouseleave', onMouseLeave);
window.addEventListener('resize', onResizePage);
window.addEventListener('contextmenu', onRightClick);
