let calculation=localStorage.getItem('calculation')
displayCalculation();
function updateCalculation(value){
  calculation += value
  displayCalculation()
  localStorage.setItem('calculation',calculation);
}
function displayCalculation(){
  document.querySelector('.jsCalculation').innerHTML=calculation;
}
function backspace() {
  calculation = calculation.slice(0, -1); // Remove the last character
  displayCalculation();
  localStorage.setItem('calculation', calculation);
}