console.log("Hello world!!");

function getComputerChoice() {
  //randomly return either rock, paper, or scissors
  //declare computerSelection variable
  let computerSelection = "";
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
  console.log(computerSelection);
  return computerSelection;
}

let computerSelection = getComputerChoice();

//use prompt() to get input from user
let playerSelection = prompt("Rock, paper, or scissors?");
//playerSelection parameter should be case-insensitive, change user input to all lowercase to be able to match a computerSelection choice
playerSelection = playerSelection.toLowerCase();
console.log(playerSelection);

function playGame(playerSelection, computerSelection) {
  //return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
  //write conditional that determines winner
  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      console.log(`It's a tie!`);
    } else if (computerSelection === "paper") {
      console.log("Computer plays paper. Computer wins!");
    } else if (computerSelection === "scissors") {
      console.log("Computer plays scissors. You win!");
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "paper") {
      console.log(`It's a tie!`);
    } else if (computerSelection === "scissors") {
      console.log("Computer plays scissors. Computer wins!");
    } else if (computerSelection === "rock") {
      console.log("Computer plays rock. You win!");
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "scissors") {
      console.log(`It's a tie!`);
    } else if (computerSelection === "rock") {
      console.log("Computer plays rock. Computer wins!");
    } else if (computerSelection === "paper") {
      console.log("Computer plays paper. You win!");
    }
  }
}

playGame(playerSelection, computerSelection);

function game() {
  //goes inside playGame function
  //has 5 rounds
  //console.log results after each round
  //keeps score
  //reports winner or loser at end
  //console.log winner at end
}
