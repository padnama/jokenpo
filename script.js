let playerScore = 0;
let computerScore = 0;

let computerPlay = function() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  }
  else if (randomNumber === 1) {
    return "paper";
  }
  else {
    return "scissors";
  }
}

let compare = function(choice1, choice2) {
  if(choice1 === choice2) { // if choice one equals choice two,
    console.log("It's a tie!"); // let user know it's a tie
  }
  else if(choice1 === "rock") { // however, if choice one is rock,
    if(choice2 === "scissors") { // evaluate whether choice two is scissors. in this case,
      console.log("You win!!"); // let user know they win
    } else { // otherwise,
      console.log("You lose!"); // let user know they lose
    }
  }
  else if(choice1 === "paper") {
    if(choice2 === "rock") {
      console.log("You win!");
    } else {
      console.log("You lose!");
    }
  }
  else if(choice1 === "scissors") {
    if(choice2 === "rock") {
      console.log("You lose!");
    } else {
      console.log("You win!");
    }
  }
}



let game = function() {
  for (let i = 0; i < 5; i++) {
    
    let playerSelection = prompt("Rock, paper ou scissors?").toLowerCase();

    compare(playerSelection, computerPlay);
      if (compare === "You win!") {
       playerScore++;
      }
      else if (compare === "You lose!") {
        computerScore++;
      }
      else if (compare === "It's a tie!") {
  
      }

 }
}

game();
console.log("Your score is: " + playerScore);