const bgColor = document.querySelector('body');
bgColor.className = 'color-1';

function resizePage(event) {
  const pageWidth = event.target.innerWidth;
  console.log(event.target.innerWidth);
  if (pageWidth <= 650) {
    bgColor.classList.remove('color-2');
    bgColor.classList.remove('color-3');
    bgColor.classList.add('color-1');
  } else if (pageWidth <= 950) {
    bgColor.classList.remove('color-1');
    bgColor.classList.remove('color-3');
    bgColor.classList.add('color-2');
  } else if (pageWidth <= 1250) {
    bgColor.classList.remove('color-1');
    bgColor.classList.remove('color-2');
    bgColor.classList.add('color-3');
  }
}

window.addEventListener('resize', resizePage);
