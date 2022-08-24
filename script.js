"use strict";
const buttonRules = document.querySelector('#btn-rules');
const rules = document.querySelector('#rules');
const closeRules = document.querySelector('.close-rules');
// The Rules modal
buttonRules.onclick = function () {
    rules.style.display = "block";
};
closeRules.onclick = function () {
    rules.style.display = "none";
};
