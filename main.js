// main.js

function updateAge() {
    const age = document.getElementById('ageSlider').value;
    document.getElementById('ageValue').innerText = age;
}

function updateWeight() {
    const weight = document.getElementById('weightSlider').value;
    document.getElementById('weightValue').innerText = weight;
}

function updateHeight() {
    const height = document.getElementById('heightSlider').value;
    document.getElementById('heightValue').innerText = height;
}

function calculateBMI() {
    const age = document.getElementById('ageSlider').value;
    const weight = document.getElementById('weightSlider').value;
    const height = document.getElementById('heightSlider').value;

    if (age && height && weight) {
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        document.getElementById('bmiValue').innerText = bmi;
        
        let category;
        let suggestion;
        
        if (bmi < 18.5) {
            category = "Underweight";
            suggestion = "Consider a balanced diet to reach a healthier weight.";
        } else if (bmi < 24.9) {
            category = "Normal weight";
            suggestion = "Great job! Keep maintaining a balanced diet and regular exercise.";
        } else if (bmi < 29.9) {
            category = "Overweight";
            suggestion = "Try incorporating more physical activity and a balanced diet.";
        } else {
            category = "Extremely obese";
            suggestion = "Consult with a healthcare provider for personalized advice.";
        }
        
        document.getElementById('bmiCategory').innerText = category;
        document.getElementById('bmiSuggestion').innerText = suggestion;
    } else {
        alert("Please select your age.");
    }
}

// Function to reset the form
function resetForm() {
    document.getElementById('ageSlider').value = 25;
    document.getElementById('weightSlider').value = 60;
    document.getElementById('heightSlider').value = 170;
    document.getElementById('ageValue').innerText = 25;
    document.getElementById('weightValue').innerText = 60;
    document.getElementById('heightValue').innerText = 170;
    document.getElementById('bmiValue').innerText = '--';
    document.getElementById('bmiCategory').innerText = '--';
    document.getElementById('bmiSuggestion').innerText = '--';
}
