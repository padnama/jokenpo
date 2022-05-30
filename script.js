/*
1. playerSelection
  a. prompt player selection

2. computerSelection
  a. call function computerPlay
  b. make variable randomNumber that selects a random number
  c. if the random number is 0, return rock
  d. if it's 1, return paper
  e. else, return scissors 
  
3. compare selections

4. output result

*/

let playerSelection = prompt("Rock, paper ou scissors?").toLowerCase();

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
  if(choice1 === choice2) {
    console.log("It's a tie!");
  }
  else if(choice1 === "rock") {
    if(choice2 === "scissors") {
      console.log("Rock beats scissors!");
    } else {
      console.log("Paper beats rock!");
    }
  }
  else if(choice1 === "paper") {
    if(choice2 === "rock") {
      console.log("Paper beats rock!");
    } else {
      console.log("Scissors beat paper");
    }
  }
  else if(choice1 === "scissors") {
    if(choice2 === "rock") {
      console.log("Rock beats scissors!");
    } else {
      console.log("Scissors beat paper");
    }
  }
}

console.log(compare(playerSelection, computerPlay));
