 function calculate_gamma() {
   document.getElementById("value-g").innerHTML = document.getElementById("dI2").value / document.getElementById("dI1").value;
 }
 function calculate_dI2() {
   document.getElementById("value-g").innerHTML = document.getElementById("gamma").value * document.getElementById("dI1").value;
 }
