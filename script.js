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

getComputerChoice();

function playGame(playerSelection, computerSelection) {
  //use prompt() to get input from user
  //return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
  //playerSelection parameter should be case-insensitive, change user input to all lowercase to be able to match a computerSelection choice
  //write conditional that determines winner
  function game() {
    //goes inside playGame function
    //has 5 rounds
    //console.log results after each round
    //keeps score
    //reports winner or loser at end
    //console.log winner at end
  }
}
