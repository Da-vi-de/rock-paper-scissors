const buttonRules = document.querySelector('#btn-rules') as  HTMLButtonElement;
const rules = document.querySelector('#rules') as  HTMLDivElement;
const closeRules = document.querySelector('.close-rules') as  HTMLImageElement;

// The Rules modal
buttonRules.onclick = function() {
    rules.style.display = "block";
  };

closeRules.onclick = function() {
    rules.style.display = "none";
  };