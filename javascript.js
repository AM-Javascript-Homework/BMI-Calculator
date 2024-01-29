// References to HTML elements
let submit = document.getElementById("bmiSubmitButton"); // Submit button
let resultSection = document.getElementById("resultSection"); // Result section container
let genderSelection = document.getElementById("genderSelection"); // Gender selection container
let female = document.getElementById("female"); // Female radio button
let male = document.getElementById("male"); // Male radio button
let heightInput = document.getElementById("Height"); // Height input field
let weightInput = document.getElementById("Weight"); // Weight input field
let result = document.getElementById("Bmiresult"); // BMI result element
let healthinessResult = document.getElementById("healthinessResult"); // Healthiness result element
let bmi; // Variable to store BMI calculation result

submit.addEventListener("click", bmiGenderSelection);

function bmiGenderSelection() {
  // Check for errors before performing BMI calculation
  bmiErrors();

  // Check the selected gender and call the respective function
  if (female.checked) {
    femaleBMI();
  } else if (male.checked) {
    maleBMI();
  }
}

// Function to calculate BMI
function calculateBMI() {
  // Check for errors before performing BMI calculation
  bmiErrors();

  // Parse height and weight
  let height = parseFloat(heightInput.value);
  let weight = parseFloat(weightInput.value);

  // Calculate BMI
  bmi = weight / (height / 100) ** 2;
  bmi = parseFloat(bmi.toFixed(2)); // Convert the string to a float

  result.innerHTML = bmi;
}

// Function to handle BMI calculation for females
function femaleBMI() {
  // Check for errors before performing BMI calculation
  bmiErrors();
  calculateBMI();

  // Determine BMI category for females
  if (bmi <= 18.5) {
    healthinessResult.innerHTML = "Underweight";
  } else if (bmi <= 24.9) {
    healthinessResult.innerHTML = "Normal";
  } else if (bmi <= 29.9) {
    healthinessResult.innerHTML = "Overweight";
  } else {
    healthinessResult.innerHTML = "Obese";
  }
}

// Function to handle BMI calculation for males
function maleBMI() {
  // Check for errors before performing BMI calculation
  bmiErrors();
  calculateBMI();

  // Determine BMI category for males
  if (bmi <= 18.5) {
    healthinessResult.innerHTML = "Underweight";
  } else if (bmi <= 24.9) {
    healthinessResult.innerHTML = "Normal";
  } else if (bmi <= 29.9) {
    healthinessResult.innerHTML = "Overweight";
  } else {
    healthinessResult.innerHTML = "Obese";
  }
}

// Function to handle input errors and animations
function bmiErrors() {
  // Check if height and weight are filled
  if (heightInput.value === "" && weightInput.value === "") {
    heightInput.classList.add("shake");
    weightInput.classList.add("shake");

    setTimeout(() => {
      heightInput.classList.remove("shake");
      weightInput.classList.remove("shake");
    }, 500);
  } else if (heightInput.value === "") {
    heightInput.classList.add("shake");
    setTimeout(() => {
      heightInput.classList.remove("shake");
    }, 500);
  } else if (weightInput.value === "") {
    weightInput.classList.add("shake");
    setTimeout(() => {
      weightInput.classList.remove("shake");
    }, 500);
  } else {
    resultSection.classList.add("show-result");
  }

  // Check if gender is selected
  if (!female.checked && !male.checked) {
    genderSelection.classList.add("shake");
  }

  // Remove the shake class after the animation duration
  setTimeout(() => {
    genderSelection.classList.remove("shake");
  }, 500);
}
