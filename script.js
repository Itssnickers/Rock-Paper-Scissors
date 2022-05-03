function playerChoice() {
let start = prompt("Type rock, paper or scissors to play!");
let answer = start.trim().toLowerCase();
if (answer === "rock") {
    return "rock";
}
else if (answer === "paper") {
    return"paper";
}
else{ (answer === "scissors")
    return"scissors";
}
}


function computerPlay2() {
let computerPlay = Math.floor(Math.random() * 3 + 1);
let computer = computerPlay;
 if (computer === 1) {
     return "rock";
 }
 else if (computer === 2) {
     return "paper";
 }
 else { (computer === 3) 
     return "scissors";
 };
}

function playRound(computer, answer) {
if (
    (answer === "rock" && computer === "paper") || 
(answer === "paper" && computer === "scissors") || 
(answer === "scissors" && computer === "rock")
) {
    console.log("You lose!")
}
else if ((answer === "rock" && computer ==="scissors") ||
(answer === "scissors" && computer === "paper") ||
(answer === "paper" && computer === "rock")) {
  return "We have a winner!";

}
else{
    return "It is a Tie!";
}
}
console.log(playRound(playerChoice(), computerPlay2()));

function Game() {
for(let i = 0; i < 5; i++) {
    console.log(playRound(playerChoice(), computerPlay2()));

}
}




