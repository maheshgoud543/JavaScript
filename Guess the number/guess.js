document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.querySelector('#num');
    const submitButton = document.querySelector('#Submit');
    const chancesDisplay = document.querySelector('#chances');
    const resultDisplay = document.querySelector('#result');
    
    let randomNumber = Math.floor(Math.random() * 100) + 1; 
    let chances = 3; 
    chancesDisplay.textContent = chances;

    submitButton.addEventListener('click', () => {
        const userinput = parseInt(inputField.value);
        
        if (isNaN(userinput) || userinput < 1 || userinput > 100) {
            resultDisplay.textContent = "Please enter a valid number between 1 and 100.";
            return;
        }

        chances--;
        chancesDisplay.textContent = chances;

        if (userinput === randomNumber) {
            resultDisplay.textContent = "Congratulations! You guessed the number!";
            submitButton.disabled = true;
        } else if (chances > 0) {
            resultDisplay.textContent = userinput > randomNumber ? "Too high! Try again." : "Too low! Try again.";
        } else {
            resultDisplay.textContent = `Game over! The number was ${randomNumber}.`;
            submitButton.disabled = true; 
        }
    });
});
