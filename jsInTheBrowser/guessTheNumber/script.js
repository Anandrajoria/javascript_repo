"use strict";

const secretNumber = Math.ceil(Math.random() * 20 + 1);

let score = 20;

document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess);

  if (!guess) {
    //when their is no input
    document.querySelector(".message").textContent = "🚫no number";

  } else if (guess === secretNumber) {
    //when correcting the right guess
    document.querySelector(".message").textContent = "🎉correct number";
    document.querySelector('body').style.backgroundColor='#60b347'
  } else if (guess > secretNumber) {
    //when guess it lower then actual value
    if (score > 1) {
      document.querySelector(".message").textContent = "📈too high";
      score--;
      document.querySelector(".score").textContent = score;
    }else{
        document.querySelector('.message').textContent='you lost the game'
      document.querySelector(".score").textContent = 0;

    }
  } else if (guess < secretNumber) {
    //when guess is higher then actual value
    if (score > 1) {
        document.querySelector(".message").textContent = "📈too low";
        score--;
        document.querySelector(".score").textContent = score;
      }else{
          document.querySelector('.message').textContent='you lost the game'
        document.querySelector(".score").textContent = 0;
  
      }
      
  }
});
