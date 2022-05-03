function playerChoice() {
let start = prompt("Type rock, paper or scissors to play!");
let answer = start.trim().toLowerCase();
if (answer === "rock") {
    console.log("rock");
    return"rock"
}
else if (answer === "paper") {
    console.log("paper");
    return"paper";
}
else{ (answer === "scissors")
    console.log("scissors");
    return"scissors";
}
}


function computerPlay2() {
const computerPlay = Math.floor(Math.random() * 3) + 1;
let computer = computerPlay;
 if (computer === 1) {
     console.log("rock");
     return"rock";
 }
 else if (computer === 2) {
     console.log("paper");
     return"paper";
 }
 else { (computer === 3) 
     console.log("scissors");
     return"scissors";
 };
}

function playRound(answer,computer) {
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
  console.log("We have a winner!");

}
else if (answer === computer) {
    console.log("It is a tie!");
}
else{
    return "Please select rock, paper, or scissors.";
}
}
(playRound(playerChoice(),computerPlay2()));
