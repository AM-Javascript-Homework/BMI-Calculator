let submit = document.getElementById("bmiSubmitButton");
let resultSection = document.getElementById("resultSection");

submit.addEventListener("click", bmi);

function bmi() {
  let heightInput = document.getElementById("Height");
  let weightInput = document.getElementById("Weight");

  // Check if height and weight are filled
  if (heightInput.value === "" || weightInput.value === "") {
    // Add shake animation class to the empty input fields
    heightInput.classList.add("shake");
    weightInput.classList.add("shake");

    // Remove the shake class after the animation duration
    setTimeout(() => {
      heightInput.classList.remove("shake");
      weightInput.classList.remove("shake");
    }, 500);
  } else {
    // Smoothly transition the result section with a CSS class
    resultSection.classList.add("show-result");
  }

  // Parse height and weight
  let height = parseFloat(heightInput.value);
  let weight = parseFloat(weightInput.value);

  // Calculate BMI
  let bmi = weight / (height / 100) ** 2;
  // Round BMI to two decimal places
  bmi = bmi.toFixed(2);

  // Display BMI result
  let result = document.getElementById("result");
  let resultOutput = document.getElementById("resultOutput");

  result.innerHTML = bmi;

  // Determine BMI category
  if (bmi <= 18.5) {
    resultOutput.innerHTML = "Underweight";
  } else if (bmi <= 25) {
    resultOutput.innerHTML = "Normal";
  } else if (bmi <= 30) {
    resultOutput.innerHTML = "Overweight";
  } else if (bmi > 30) {
    resultOutput.innerHTML = "Obese";
  }
}
