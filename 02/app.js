const bgColor = document.querySelector('body');
bgColor.className = 'color-1';

function resizePage(event) {
  const pageWidth = event.target.innerWidth;
  console.log(event.target.innerWidth);
  if (pageWidth <= 600) {
    bgColor.classList.remove('color-2');
    bgColor.classList.remove('color-3');
    bgColor.classList.add('color-1');
  } else if (pageWidth <= 900) {
    bgColor.classList.remove('color-1');
    bgColor.classList.remove('color-3');
    bgColor.classList.add('color-2');
  } else if (pageWidth <= 1200) {
    bgColor.classList.remove('color-1');
    bgColor.classList.remove('color-2');
    bgColor.classList.add('color-3');
  }
}

window.addEventListener('resize', resizePage);
