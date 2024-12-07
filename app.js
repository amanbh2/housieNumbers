// Get references to HTML elements
const generateButton = document.getElementById('generate-button');
const resetButton = document.getElementById('reset-button');
const currentNumberDisplay = document.getElementById('current-number');
const calledNumbersContainer = document.getElementById('called-numbers');

// Initialize variables
const maxNumber = 90; // Housie has numbers from 1 to 90
let calledNumbers = [];

// Function to generate a random number
function generateRandomNumber() {
    if (calledNumbers.length === maxNumber) {
        alert("All numbers have been called!");
        return;
    }

    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    } while (calledNumbers.includes(randomNumber));

    calledNumbers.push(randomNumber);

    // Update the UI
    currentNumberDisplay.textContent = randomNumber.toString().padStart(2, '0');
    const numberElement = document.createElement('span');
    numberElement.textContent = randomNumber;
    calledNumbersContainer.appendChild(numberElement);
}

// Function to reset the game
function resetGame() {
    calledNumbers = [];
    currentNumberDisplay.textContent = '..';
    calledNumbersContainer.innerHTML = '';
}

// Event listeners for buttons
generateButton.addEventListener('click', generateRandomNumber);
resetButton.addEventListener('click', resetGame);
