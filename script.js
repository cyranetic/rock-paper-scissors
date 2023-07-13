//initialize variables
let computerSelection;
let playerSelection;
let scores = {
  computerScore: 0,
  playerScore: 0,
};

function getComputerSelection() {
  //randomly return either rock, paper, or scissors
  //use Math.random to get 0, 1, or 2, use a conditional to assign 'rock', 'paper', or 'scissors' value to computerSelection based on random number
  computerSelection = Math.floor(Math.random() * 3);
  if (computerSelection === 0) {
    computerSelection = "rock";
  } else if (computerSelection === 1) {
    computerSelection = "paper";
  } else if (computerSelection === 2) {
    computerSelection = "scissors";
  }
  //return computerSelection value
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  //assign computerChoice to variable
  computerSelection = getComputerSelection();
  //use prompt() to get input from user
  playerSelection = prompt("Rock, paper, or scissors?");
  //playerSelection parameter should be case-insensitive, change user input to all lowercase to be able to match a computerSelection choice
  playerSelection = playerSelection.toLowerCase();

  //return a string that declares the winner of the round, alter scores
  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      console.log(`Computer also plays rock. It's a tie this round!`);
    } else if (computerSelection === "paper") {
      console.log("Computer plays paper. Computer wins this round!");
      scores["computerScore"]++;
    } else if (computerSelection === "scissors") {
      console.log("Computer plays scissors. You win this round!");
      scores["playerScore"]++;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "paper") {
      console.log(`Computer also plays paper. It's a tie this round!`);
    } else if (computerSelection === "scissors") {
      console.log("Computer plays scissors. Computer wins this round!");
      scores["computerScore"]++;
    } else if (computerSelection === "rock") {
      console.log("Computer plays rock. You win this round!");
      scores["playerScore"]++;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "scissors") {
      console.log(`Computer also plays scissors. It's a tie this round!`);
    } else if (computerSelection === "rock") {
      console.log("Computer plays rock. Computer wins this round!");
      scores["computerScore"]++;
    } else if (computerSelection === "paper") {
      console.log("Computer plays paper. You win this round!");
      scores["playerScore"]++;
    }
  }

  return scores;
}

function playGame() {
  //play 5 rounds, keep score, say winner at end

  //do 5 times
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection);
  }

  console.log(scores);

  //console.log winner at end
  if (scores["playerScore"] > scores["computerScore"]) {
    console.log("You win!!!!!!!");
  } else if (scores["playerScore"] < scores["computerScore"]) {
    console.log("You lose!!!!!!!");
  } else if (scores["playerScore"] === scores["computerScore"]) {
    console.log(`It's a tie!!!!!!!!`);
  }
}

playGame();
