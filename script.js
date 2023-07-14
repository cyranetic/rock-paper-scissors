//initialize variables whose values will change throughout gameplay
let computerSelection;
let playerSelection;
let scores = {
  computerScore: 0,
  playerScore: 0,
};

//randomly return either rock, paper, or scissors; 3 options, so limit random numbers to 0, 1, and 2
function getComputerSelection() {
  computerSelection = Math.floor(Math.random() * 3);

  if (computerSelection === 0) {
    computerSelection = "rock";
  } else if (computerSelection === 1) {
    computerSelection = "paper";
  } else if (computerSelection === 2) {
    computerSelection = "scissors";
  }

  return computerSelection;
}

//runs single round of the game
function playRound(playerSelection, computerSelection) {
  //generate new random computer selection
  computerSelection = getComputerSelection();
  //use prompt() to get new input from user
  playerSelection = prompt("Rock, paper, or scissors?");
  //playerSelection parameter should be case-insensitive; change user input to all lowercase to be able to match a computerSelection choice
  playerSelection = playerSelection.toLowerCase();

  //log to console a string that declares the winner of the round; update the scores
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
  //return updated scores object so winner can be reported at end of game in playGame()
  return scores;
}

//runs entire game
function playGame() {
  //play 5 rounds, keep score, say winner at end

  //play 5 times
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection);
  }

  //show the player the final scores
  console.log(scores);

  //log winner to console at end
  if (scores["playerScore"] > scores["computerScore"]) {
    console.log("You win!!!!!!!");
  } else if (scores["playerScore"] < scores["computerScore"]) {
    console.log("You lose!!!!!!!");
  } else if (scores["playerScore"] === scores["computerScore"]) {
    console.log(`It's a tie!!!!!!!!`);
  }
}

//initiates entire game
playGame();
