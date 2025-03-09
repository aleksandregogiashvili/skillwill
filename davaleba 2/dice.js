function DiceRoll(){
  let tries = 0;
  while (Math.floor(Math.random() * 6) + 1 !== 3) tries++;
  return tries + 1;
}

let a = DiceRoll();
let b = DiceRoll();


console.log(`Player A: ${a} tries, Player B: ${b} tries`)

if (a < b) {
  console.log("Player A won!")
}else if (b < a) {
  console.log("Player B won!")
}else {
  console.log("It's a tie!")
}

DiceRoll();