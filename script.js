'use strict';

const generateBoxes = (gridSize, gridContainer) => {
  for (let i = 0; i < gridSize; i++) {
    const gridRow = document.createElement('div');
    gridRow.classList.add('grid-row');
    for (let j = 0; j < gridSize; j++) {
      const gridBox = document.createElement('div');
      gridBox.classList.add('grid-box');
      gridRow.appendChild(gridBox);
    }
    gridContainer.appendChild(gridRow);
  }

  let currentGridBox = null;

  const handleMouseOver = (event) => {
    event.target.style.backgroundColor = 'black';
  };

  gridContainer.addEventListener('mousedown', (event) => {
    event.preventDefault();
    gridContainer.addEventListener('mouseover', handleMouseOver);
  });

  gridContainer.addEventListener('mouseup', () => {
    gridContainer.removeEventListener('mouseover', handleMouseOver);
  });
};

let gridSize = 64;
const gridContainer = document.querySelector('.grid-container');

generateBoxes(gridSize, gridContainer);
