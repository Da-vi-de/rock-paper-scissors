const buttonRules = document.querySelector('#btn-rules') as  HTMLButtonElement;
const rules = document.querySelector('#rules') as  HTMLDivElement;
const closeRules = document.querySelector('.close-rules') as  HTMLImageElement;

let gameContainer = document.querySelector('.triangle-bg-container') as HTMLDivElement;
let choices = document.querySelector('.choices') as  HTMLDivElement;

// The Rules modal
buttonRules.onclick = function() {
    rules.style.display = "block";
  };

closeRules.onclick = function() {
    rules.style.display = "none";
  };

// Images paths are stored in an object
// so that i could better solve the problem of changing the src image!
interface choiceOption {
  "paper":string;
  "scissors":string;
  "rock":string;
}

const choiceOption = {
  "paper": "./images/icon-paper.svg",
  "scissors": "./images/icon-scissors.svg",
  "rock": "./images/icon-rock.svg"
};

// Hide the game response and "play again" button!
function hideResponse(): void {
  choices.style.display = "none";
};
hideResponse();

// The function si called by the onClick event in HTML file!
function getUserChoice(choice:string) {

  gameContainer.style.display = "none";
  choices.style.display = "grid";

 (document.getElementById('userChoiceImg') as HTMLImageElement).src = choiceOption[choice];
};