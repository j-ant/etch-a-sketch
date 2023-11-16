const gridContainer = document.querySelector('.grid-container');
const gridSizeSlider = document.querySelector('.grid-size-slider');
const gridSizeValue = document.querySelector('#grid-size-value');
const classicModeButton = document.querySelector('#classic');
const colorfulModeButton = document.querySelector('#colorful');
const shadeModeButton = document.querySelector('#shade');
const resetButton = document.querySelector('#reset');

const modes = Object.freeze({
  CLASSIC: 'black',
  COLORFUL: 'colorful',
  SHADE: 'shade',
});

let activeMode = modes.CLASSIC;

gridSizeSlider.oninput = (e) => {
  gridSizeValue.innerHTML = `${e.target.value} x ${e.target.value}`;
};

gridSizeSlider.onchange = (e) => {
  generateGrid(e.target.value);
};

document.body.onmousedown = () => {
  gridContainer.addEventListener('mouseover', changeColor);
};
document.body.onmouseup = () => {
  gridContainer.removeEventListener('mouseover', changeColor);
};

classicModeButton.onclick = () => {
  activeMode = modes.CLASSIC;
};
shadeModeButton.onclick = () => {
  activeMode = modes.SHADE;
};
colorfulModeButton.onclick = () => {
  activeMode = modes.COLORFUL;
};
resetButton.onclick = () => {
  console.log(gridSize);
  generateGrid(gridSize);
};

const changeColor = (e) => {
  switch (activeMode) {
    case modes.CLASSIC:
      e.target.style.backgroundColor = 'black';
      break;
    case modes.COLORFUL:
      const redValue = Math.floor(Math.random() * 255);
      const greenValue = Math.floor(Math.random() * 255);
      const blueValue = Math.floor(Math.random() * 255);
      e.target.style.backgroundColor = `rgb(${redValue},${greenValue},${blueValue})`;
      break;
    case modes.SHADE:
      const value = getComputedStyle(e.target).backgroundColor;
      if (value === 'rgb(255, 255, 255)') {
        e.target.style.backgroundColor = `rgba(0, 0, 0, 0.1)`;
        break;
      } else if (value.includes('rgba')) {
        const parts = value.split(', ');
        const alpha = parseFloat(parts[3].replace(')', ''));
        e.target.style.backgroundColor = `rgba(0, 0, 0, ${alpha + 0.1})`;
      } else {
        break;
      }
      break;
    default:
      break;
  }
};

const generateGrid = (gridSize) => {
  resetGrid();

  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridBox = document.createElement('div');
    gridBox.classList.add('grid-box');
    gridContainer.appendChild(gridBox);
  }
};

const resetGrid = () => {
  gridContainer.innerHTML = '';
};

const defaultGridSize = 16;
let gridSize = defaultGridSize;

window.onload = () => {
  generateGrid(defaultGridSize);
};
