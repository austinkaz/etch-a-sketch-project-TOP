const container = document.getElementById('container');
let gridSize = 16; // Number of squares per side

function randomRGB() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

const userInput = prompt("Enter the number of squares per side (max 100):");
const newSize = parseInt(userInput);
if (!isNaN(newSize) && newSize > 0 && newSize <= 100) {
    gridSize = newSize;
    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }

    // Use event delegation: listen for mouseover events on the container and handle only if a .square is hovered
        container.addEventListener('mouseover', (event) => {
            if (event.target.classList.contains('square')) {
                event.target.style.backgroundColor = randomRGB();
            }
        });

} else {
    alert("Invalid input. Using default size of 16.");
    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }

    container.addEventListener('mouseover', (event) => {
        if (event.target.classList.contains('square')) {
            event.target.style.backgroundColor = randomRGB();
        }
    });
}

container.style.setProperty('--grid-size', gridSize);

const resetButton = document.createElement('button');
resetButton.textContent = 'Reset';
resetButton.addEventListener('click', () => {
    const squares = container.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = '';
    });
});
document.body.appendChild(resetButton);
resetButton.classList.add('reset-button');



