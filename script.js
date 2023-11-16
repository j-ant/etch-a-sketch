const gridContainer = document.querySelector('.grid-container');
const gridSizeSlider = document.querySelector('.grid-size-slider');
const gridSizeValue = document.querySelector('#grid-size-value');

gridSizeSlider.oninput = (e) => {
  gridSizeValue.innerHTML = `${e.target.value} x ${e.target.value}`;
};

gridSizeSlider.onchange = (e) => {
  generateGrid(e.target.value);
};

const generateGrid = (gridSize) => {
  gridContainer.innerHTML = '';
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridBox = document.createElement('div');
    gridBox.classList.add('grid-box');
    gridContainer.appendChild(gridBox);
  }
};

const defaultGridSize = 16;

window.onload = () => {
  generateGrid(defaultGridSize);
};
