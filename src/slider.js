const frame = document.querySelector('.frame');

const leftArrow = document.querySelector('.left-arrow');
const rightArrow =  document.querySelector('.right-arrow');

const navigation = document.querySelector('.navigation');

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
  updateNavigationDot(currentIndex);
  renderImage();
}

function slideLeft() {
  currentIndex--;
  if (currentIndex < 0) currentIndex =  maxIndex;
  updateNavigationDot(currentIndex);
  renderImage();
}

function renderImage() {
  // not sure why but window.innerWidth seems to be 4px too small
  const offset = currentIndex * (window.innerWidth + 4);
  frame.style.right = `${offset}px`;
}

// navigation

for(let i = 0; i <= maxIndex; i++) {
  const dot = document.createElement('div');
  dot.dataset.index = i;
  navigation.appendChild(dot);
}

navigation.addEventListener('click', navigate);
let currentlyActive = navigation.querySelector('[data-index="0"]');
currentlyActive.classList.add('active');

function navigate(e) {
  const index = e.target.dataset.index
  if(index) {
    updateNavigationDot(index);
    currentIndex = index;
    renderImage();
  }
}

function updateNavigationDot(index) {
  currentlyActive.classList.remove('active');
  currentlyActive = navigation.querySelector(`[data-index="${index}"]`);
  currentlyActive.classList.add('active');
}