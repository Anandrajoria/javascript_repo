"use strict";

let secretNumber = Math.ceil(Math.random() * 20 + 1);

let score = 20;
let highScore=0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess);

  if (!guess) {
    //when their is no input
    document.querySelector(".message").textContent = "🚫no number";
  } else if (guess === secretNumber) {
    //when correcting the right guess
    document.querySelector(".message").textContent = "🎉correct number";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;

    if(score>highScore){
      highScore=score
      document.querySelector('.highscore').textContent=highScore
    }
  }// when guess is different 
  else if(guess!==secretNumber){
      if(score>1){
        if (score > 1) {
          document.querySelector(".message").textContent = guess>secretNumber? "📈too high":"📉too low";
          score--;
          document.querySelector(".score").textContent = score;
        } else {
          document.querySelector(".message").textContent = "you lost the game";
          document.querySelector(".score").textContent = 0;
        }
      }
  } 
  

});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.ceil(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = "start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
});
