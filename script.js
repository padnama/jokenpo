let userScore = 0;
let computerScore = 0;

let computerPlay = function() {
  let options = [
    "rock",
    "paper",
    "scissors"
  ];
  
  let randomChoice = options[Math.floor(Math.random() * 3)];
  
  return randomChoice
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "rock" && computerSelection == "rock") ||
    (playerSelection == "paper" && computerSelection == "paper") ||
    (playerSelection == "scissors" && computerSelection == "scissors")
    )
    {
    let tie = 0;
    console.log("it's a tie!");
    return tie;
    }
  else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
    )
    {
    let win = 2;
    console.log("you win! " + playerSelection + " beats " + computerSelection);
    return win;
    }
  else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
    )
    {
    let loose = 1;
    console.log("you lose! " + playerSelection + " beats " + computerSelection);
    return loose;
    }
}

let game = function() {
  let userWins = 0;
  let computerWins = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("rock, paper or scissors?");
    let computerSelection = computerPlay();
    let roundResult = playRound(playerSelection, computerSelection);
    if (roundResult == 1) {
      computerWins++;
    }
    else if (roundResult == 2) {
      userWins++;
    }
    }
  if (userWins > computerWins) {
    let finalVictory = "final: you win!";
    return finalVictory;
  }
  else if (userWins < computerWins) {
    let finalLoss = "final: you loose!";
    return finalLoss;
  }
  else {
    let finalTie = "final: it's a tie!"
    return finalTie;
  }
}

console.log(game());