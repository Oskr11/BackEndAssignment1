function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);

    let result = '';

    if (bmi < 18.5) {
        result = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        result = 'Overweight';
    } else {
        result = 'Obese';
    }

    document.getElementById('result').innerHTML = `BMI: ${bmi} - ${result}`;
}
