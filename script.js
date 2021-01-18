"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number!";

// document.querySelector(".score").textContent = 10;
// document.querySelector(".number").textContent = 13;

// document.querySelector(".guess").value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // Make a desicion
  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No Number! 🤨";
    // When Player Wins!
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number😍";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    // When Guess is Too High!
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Too High! 🤐";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost 😥";
    }
    // When Guess is Too Low!
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Too Low! 🙄";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost 😥";
    }
  }
});

// Try to implement the Try again button

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Try Guessing Again!";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
