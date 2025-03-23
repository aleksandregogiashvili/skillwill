document.getElementById("calculateButton").addEventListener("click", function() {
  const input = document.getElementById("numberInput").value;
  const numbers = input.split(":").map(Number);

  const sum = numbers.reduce((a, b) => a + b, 0); 
  const average = sum / numbers.length; 

  document.getElementById("resultDisplay").innerText = `Average: ${average.toFixed(1)}`;
});