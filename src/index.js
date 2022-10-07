import '@andrewjh271/menu';

const frame = document.querySelector('.frame');

const leftArrow = document.querySelector('.left-arrow');
const rightArrow =  document.querySelector('.right-arrow');

let currentIndex = 0;
const maxIndex = 8;

rightArrow.addEventListener('click', slideRight);
leftArrow.addEventListener('click', slideLeft);
window.addEventListener('resize', renderImage);
window.addEventListener('keydown', keydown);

function keydown(e) {
  if(e.key === 'ArrowLeft') {
    slideLeft();
  } else if(e.key === 'ArrowRight') {
    slideRight();
  }
}

function slideRight() {
  currentIndex++;
  if (currentIndex > maxIndex) currentIndex =  0;
  renderImage();
}

function slideLeft() {
  currentIndex--;
  if (currentIndex < 0) currentIndex =  maxIndex;
  renderImage();
}

function renderImage() {
  // not sure why but window.innerWidth seems to be 4px too small
  const offset = currentIndex * (window.innerWidth + 4);
  frame.style.right = `${offset}px`;
}