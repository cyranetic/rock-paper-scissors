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

//build html content
const container = document.querySelector("body");

const rockButton = document.createElement("button");
rockButton.textContent = "ROCK";
container.appendChild(rockButton);
rockButton.addEventListener("click", playRound);

const paperButton = document.createElement("button");
paperButton.textContent = "PAPER";
container.appendChild(paperButton);
paperButton.addEventListener("click", playRound);

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "SCISSORS";
container.appendChild(scissorsButton);
scissorsButton.addEventListener("click", playRound);

let results = document.createElement("div");
results.textContent = "";
container.appendChild(results);

let runningScore = document.createElement("div");
runningScore.textContent = `Player: ${scores.playerScore}. Computer: ${scores.computerScore}.`;
container.appendChild(runningScore);

let finalScore = document.createElement("div");
finalScore.textContent = "";
container.appendChild(finalScore);

//runs single round of the game
function playRound(e, computerSelection) {
  //generate new random computer selection
  computerSelection = getComputerSelection();
  //get playerSelection from button clicked
  playerSelection = e.target.textContent;
  //playerSelection parameter should be case-insensitive; change to all lowercase to be able to match a computerSelection choice
  playerSelection = playerSelection.toLowerCase();

  //don't play any more if one player already has 5 points
  if (scores.playerScore === 5 || scores.computerScore === 5) {
    return;
  }

  //update results div with a string that declares the winner of the round; update the scores

  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      const parag = document.createElement("p");
      parag.textContent += `Computer also plays rock. It's a tie this round!`;
      results.appendChild(parag);
      runningScore.textContent = `Player: ${scores.playerScore}. Computer: ${scores.computerScore}.`;
    } else if (computerSelection === "paper") {
      const parag = document.createElement("p");
      parag.textContent += "Computer plays paper. Computer wins this round!";
      results.appendChild(parag);
      scores["computerScore"]++;
      runningScore.textContent = `Player: ${scores.playerScore}. Computer: ${scores.computerScore}.`;
    } else if (computerSelection === "scissors") {
      const parag = document.createElement("p");
      parag.textContent += "Computer plays scissors. You win this round!";
      results.appendChild(parag);
      scores["playerScore"]++;
      runningScore.textContent = `Player: ${scores.playerScore}. Computer: ${scores.computerScore}.`;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "paper") {
      const parag = document.createElement("p");
      parag.textContent += `Computer also plays paper. It's a tie this round!`;
      results.appendChild(parag);
      runningScore.textContent = `Player: ${scores.playerScore}. Computer: ${scores.computerScore}.`;
    } else if (computerSelection === "scissors") {
      const parag = document.createElement("p");
      parag.textContent += "Computer plays scissors. Computer wins this round!";
      results.appendChild(parag);
      scores["computerScore"]++;
      runningScore.textContent = `Player: ${scores.playerScore}. Computer: ${scores.computerScore}.`;
    } else if (computerSelection === "rock") {
      const parag = document.createElement("p");
      parag.textContent += "Computer plays rock. You win this round!";
      results.appendChild(parag);
      scores["playerScore"]++;
      runningScore.textContent = `Player: ${scores.playerScore}. Computer: ${scores.computerScore}.`;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "scissors") {
      const parag = document.createElement("p");
      parag.textContent += `Computer also plays scissors. It's a tie this round!`;
      results.appendChild(parag);
      runningScore.textContent = `Player: ${scores.playerScore}. Computer: ${scores.computerScore}.`;
    } else if (computerSelection === "rock") {
      const parag = document.createElement("p");
      parag.textContent += "Computer plays rock. Computer wins this round!";
      results.appendChild(parag);
      scores["computerScore"]++;
      runningScore.textContent = `Player: ${scores.playerScore}. Computer: ${scores.computerScore}.`;
    } else if (computerSelection === "paper") {
      const parag = document.createElement("p");
      parag.textContent += "Computer plays paper. You win this round!";
      results.appendChild(parag);
      scores["playerScore"]++;
      runningScore.textContent = `Player: ${scores.playerScore}. Computer: ${scores.computerScore}.`;
    }
  }

  //play until someone has 5 points
  if (scores.playerScore === 5 || scores.computerScore === 5) {
    //log winner to console at end
    if (scores["playerScore"] > scores["computerScore"]) {
      finalScore.textContent += "You win!!!!!!! :)";
    } else if (scores["playerScore"] < scores["computerScore"]) {
      finalScore.textContent += "You lose!!!!!!! :(";
    } else if (scores["playerScore"] === scores["computerScore"]) {
      finalScore.textContent += `It's a tie!!!!!!!! :|`;
    }
  }
}
