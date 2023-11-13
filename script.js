'use strict';

const gridContainer = document.querySelector('.grid-container');

const generateBoxes = (gridSize) => {
  for (let index = 0; index < gridSize; index++) {
    const gridRow = document.createElement('div');
    gridRow.classList.add('grid-row');
    for (let index = 0; index < gridSize; index++) {
      const gridBox = document.createElement('div');
      gridBox.classList.add('grid-box');
      gridRow.appendChild(gridBox);
    }
    gridContainer.appendChild(gridRow);
  }
};

let gridSize = 16;

generateBoxes(gridSize);
