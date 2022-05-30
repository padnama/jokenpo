
// call function computerPlay
// make variable randomNumber that selects a random number
// if the random number is 0, return rock
// if it's 1, return paper
// else, return scissors

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return 'Rock';
  }
  else if (randomNumber === 1) {
    return 'Paper';
  }
  else {
    return 'Scissors';
  }
}

console.log(computerPlay())