# Frontend Mentor - Rock, Paper, Scissors solution

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### Link

- Live Site URL: [Live Site](https://rock-paper-scissors-da-vi-de.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- SCSS
- Typescript
- Mobile-first workflow

### What I learned

The aim of the project was to use typescript for the first time but i also dealt with some complexities; i believe games in Front-end development (specifically the front side of Front-end) are a good way to practice problem solving
because as an orchestra everything (HTML, CSS, JS/TS) needs to be in sync in order to function as a whole, and the best approach, to me, is always vanilla JS!

In this specific project functions were the main characters, each one executes a little task; there's been some thinking on how to link all together and of course some trouble shooting as well... but eventually everything is in place and works fine.

In getUserChoice i had to change the image source directly because the function is called by the 3  onclick events, on the other hand getComputerChoice is called by getUserChoice so, i used the insertAdjacentHTML method just to show a different way of doing things; the browser doesn't reparse the HTML with insertAdjacentHTML method, it can't be used in getUserChoice unless the page is refreshed every time!

User choice

```js
 (document.getElementById('userChoiceImg') as HTMLImageElement).src = choiceOption[choice];
```
Computer choice

```js
 const markup = `
 <div class="computer-pick">
    <h2 class="computer-pick-text">the house picked</h2>
    <div id="custom-btns">
      <div class="pc-picked-img paper-img">
        <img class="img" src = ${choiceOption[computerChoice]} alt="computer choice">
      </div>
    </div>
  </div>
  `;
   choices.insertAdjacentHTML('beforeend', markup);
```

I wanted make the images look like real buttons, i did it and i was satisfied with the result, i practicied a bit of CSS art but the HTML was getting messy and everything i did was interfering with the functionality! I kept the code in components file though.

In conclusion this project has been a great learning experience!