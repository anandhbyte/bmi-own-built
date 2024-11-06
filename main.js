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

    if (age == 0 || weight == 0 || height == 0) {
        showModal();
        return;
    }

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
        alert("Please select your age, weight, and height.");
    }
}

function showModal() {
    const modal = document.getElementById("errorModal");
    const span = document.getElementsByClassName("close")[0];
    const okButton = document.getElementById("modalOkButton");

    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    }

    okButton.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Function to reset the form
function resetForm() {
    document.getElementById('ageSlider').value = 0;
    document.getElementById('weightSlider').value = 0;
    document.getElementById('heightSlider').value = 0;
    document.getElementById('ageValue').innerText = 0;
    document.getElementById('weightValue').innerText = 0;
    document.getElementById('heightValue').innerText = 0;
    document.getElementById('bmiValue').innerText = '--';
    document.getElementById('bmiCategory').innerText = '--';
    document.getElementById('bmiSuggestion').innerText = '--';
}

function downloadResult() {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();

    const name = document.getElementById('name').value || "Not Provided";
    const gender = document.getElementById('gender').value || "Not Provided";
    const age = document.getElementById('ageSlider').value || "Not Provided";
    const weight = document.getElementById('weightSlider').value || "Not Provided";
    const height = document.getElementById('heightSlider').value || "Not Provided";
    const bmi = document.getElementById('bmiValue').innerText || "--";
    const category = document.getElementById('bmiCategory').innerText || "--";
    const suggestion = document.getElementById('bmiSuggestion').innerText || "--";

    // PDF Title
    pdf.setFontSize(22);
    pdf.setTextColor(40, 78, 120);
    pdf.text("BMI Calculation Result", 20, 20);

    // Subtitle with name and details
    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0);
    pdf.text(`Name: ${name}`, 20, 35);
    pdf.text(`Gender: ${gender}`, 20, 45);
    pdf.text(`Age: ${age} years`, 20, 55);

    // BMI Calculation Details
    pdf.setFontSize(16);
    pdf.setTextColor(40, 78, 120);
    pdf.text("BMI Details", 20, 70);
    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0);
    pdf.text(`Weight: ${weight} kg`, 20, 80);
    pdf.text(`Height: ${height} cm`, 20, 90);
    pdf.text(`BMI: ${bmi}`, 20, 100);
    pdf.text(`Category: ${category}`, 20, 110);
    
    // Health Suggestion
    pdf.setFontSize(16);
    pdf.setTextColor(40, 78, 120);
    pdf.text("Health Suggestion", 20, 125);
    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0);
    pdf.text(suggestion, 20, 135, { maxWidth: 170 }); // Wrap text within 170px

    // Save the PDF with the file name including the user's name
    const fileName = `${name.replace(/\s+/g, '_')}_BMI_Result.pdf`;
    pdf.save(fileName);
}
