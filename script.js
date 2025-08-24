let gridsize = 5; // Initial grid size
const drawingArea = document.querySelector('.drawing-area');
const increaseButton = document.querySelector('#increase-button');
const decreaseButton = document.querySelector('#decrease-button');
const clearButton = document.querySelector('#clear-button');
let isMousePressed = false; 

function createGrid(size) {
    drawingArea.innerHTML = ''; // Clear the existing grid
    drawingArea.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    drawingArea.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        // Change color when mouse is over the square and pressed
        square.addEventListener('mouseover', () => {
            if (isMousePressed) {
                square.style.backgroundColor = 'black'; // Change color to black
            }
        });

        drawingArea.appendChild(square);
    }
}

// Mouse down and mouse up events to track pressing state
drawingArea.addEventListener('mousedown', () => {
    isMousePressed = true; // Mouse is pressed
});

drawingArea.addEventListener('mouseup', () => {
    isMousePressed = false; // Mouse is released
});

// Prevent mouseup from firing when leaving the drawing area
drawingArea.addEventListener('mouseleave', () => {
    isMousePressed = false; // Reset when leaving the area
});

// Increase grid size
increaseButton.addEventListener('click', () => {
    gridsize++;
    createGrid(gridsize);
});

// Decrease grid size
decreaseButton.addEventListener('click', () => {
    gridsize = Math.max(5, gridsize - 1); // Prevent grid size from going below 5
    createGrid(gridsize);
});

// Clear button functionality
clearButton.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = 'white'; // Reset color to white
    });
});

// Initial grid setup
createGrid(gridsize);