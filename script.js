function computerPlay() {
    let choices = ["rock", "paper", "scissors"]
    let pick = Math.floor(Math.random() * choices.length);
    console.log(pick, choices[pick])
}
computerPlay()