const buttonRules = document.querySelector('#btn-rules') as  HTMLButtonElement;
const rules = document.querySelector('#rules') as  HTMLDivElement;
const closeRules = document.querySelector('.close-rules') as  HTMLImageElement;

let gameContainer = document.querySelector('.triangle-bg-container') as HTMLDivElement;
let choices = document.querySelector('.choices') as  HTMLDivElement;
let scoreText = document.querySelector (".score h1") as HTMLDivElement;
let score: number = 0;

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
// The computer choice function is called here so that the game works as expected!
function getUserChoice(choice:string) {

  gameContainer.style.display = "none";
  choices.style.display = "grid";

 (document.getElementById('userChoiceImg') as HTMLImageElement).src = choiceOption[choice];
 getComputerChoice(choice);
};

// The result function is called here in order to include the functionality,
// so that the game makes sense!
function getComputerChoice(choice:string) {
  let options: string[] = ["rock", "paper", "scissors"];
  const computerChoice: string = options[Math.floor(Math.random() * options.length)];

 const markup: string = `
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
   getResult(choice, computerChoice);
};

// Some logic to determine the outcome!
function getResult(userChoice: string, computerChoice:string) {

  if (userChoice === "paper" && computerChoice === "scissors") {
    setDecision("you lose!");
  };

  if (userChoice === "paper" && computerChoice === "rock") {
    setDecision("you win!");
    setScore( score  + 1);
  };

  if (userChoice === "paper" && computerChoice === "paper") {
    setDecision("It's a tie!");
  };

  if (userChoice === "scissors" && computerChoice === "rock") {
    setDecision("you lose!");
  };

  if (userChoice === "scissors" && computerChoice === "paper") {
    setDecision("you win!");
    setScore(score  + 1);
  };

  if (userChoice === "scissors" && computerChoice === "scissors") {
    setDecision("It's a tie!");
  };

  if (userChoice === "rock" && computerChoice === "paper") {
    setDecision("you lose!");
  };

  if (userChoice === "rock" && computerChoice === "scissors") {
    setDecision("you win!");
    setScore( score  + 1);
  };

  if (userChoice === "rock" && computerChoice === "rock") {
    setDecision("It's a tie!");
  };
};

// Render the text based on the outcome!
function setDecision(decision:string) {
  (document.querySelector(".response h2") as HTMLDivElement).innerText = decision;
};

// Keep track of the score and render it!
function setScore(newScore: number) {
  score = newScore;
  scoreText.innerText = newScore.toString();
};

// This function is called by the onClick event in HTML file
// in order to play again!
function restartGame() {
  choices.style.display = "none";
  gameContainer.style.display = "grid";
};