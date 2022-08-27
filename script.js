"use strict";
const buttonRules = document.querySelector('#btn-rules');
const rules = document.querySelector('#rules');
const closeRules = document.querySelector('.close-rules');
let gameContainer = document.querySelector('.triangle-bg-container');
let choices = document.querySelector('.choices');
// The Rules modal
buttonRules.onclick = function () {
    rules.style.display = "block";
};
closeRules.onclick = function () {
    rules.style.display = "none";
};
const choiceOption = {
    "paper": "./images/icon-paper.svg",
    "scissors": "./images/icon-scissors.svg",
    "rock": "./images/icon-rock.svg"
};
// Hide the game response and "play again" button!
function hideResponse() {
    choices.style.display = "none";
}
;
hideResponse();
// The function si called by the onClick event in HTML file!
function getUserChoice(choice) {
    gameContainer.style.display = "none";
    choices.style.display = "grid";
    document.getElementById('userChoiceImg').src = choiceOption[choice];
    getComputerChoice(choice);
}
;
function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    const markup = `
 <div class="computer-pick">
    <h2 class="computer-pick-text">the house picked</h2>
    <div>
      <div class="pc-picked-img paper-img">
        <img class="img" src = ${choiceOption[computerChoice]} alt="computer choice">
      </div>
    </div>
  </div>
  `;
    choices.insertAdjacentHTML('beforeend', markup);
}
;
