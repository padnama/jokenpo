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
    let tie = "it's a tie!";
    return tie;
    }
  else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
    )
    {
    let win = ("you win! " + playerSelection + " beats " + computerSelection);
    return win;
    }
  else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
    )
    {
    let loose = ("you lose! " + playerSelection + " beats " + computerSelection);
    return loose;
    }
}

let playerSelection = "rock";
let computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));
