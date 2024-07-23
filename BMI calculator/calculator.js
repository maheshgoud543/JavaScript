document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const height = parseInt(document.querySelector('#height').value);
        const weight = parseInt(document.querySelector('#weight').value);
        const results = document.querySelector('#results');

        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            results.innerHTML = "Please enter valid height and weight.";
            return;
        }

        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `Results: ${bmi}`;
    });
});
