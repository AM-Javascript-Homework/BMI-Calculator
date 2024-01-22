// submit btn
let submit = document.getElementById("bmiSubmitButton")
// if submit on click , bmi start
submit.addEventListener("click",bmi)
// bmi function 
function bmi () {
  //height
  let height = parseFloat(document.getElementById('Height').value);
  //weight
  let weight = parseFloat(document.getElementById('Weight').value);
  //bmi formol
  let bmi = weight / (height/100)**2;
  // bmi ronding
  bmi = bmi.toFixed(2)
  //results
  let result = document.getElementById("result")
  let resultOutput = document.getElementById("resultOutput")
  //results Div
  let returnOutputDiv = document.getElementById("returnOutput")
  let returnAnswerDiv = document.getElementById("returnAnswer")

  
  result.innerHTML = "Your bmi is : "+bmi
  
  if (bmi <= 18.5) {
    resultOutput.innerHTML ="Under Weight"
  }
  else if (bmi <= 25){
    resultOutput.innerHTML ="Normal"
  }
  else if (bmi <= 30){
    resultOutput.innerHTML ="Over Weight"
  }
  else if (bmi > 30){
    resultOutput.innerHTML ="Obese"
  }
  
}