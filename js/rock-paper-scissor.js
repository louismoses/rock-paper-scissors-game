"use strict";

//initial
let playBtn = document.querySelector(".play-btn");
let mainGame = document.querySelector(".main-game-initial");

playBtn.addEventListener("click", function () {
  mainGame.classList.toggle("main-game");
  playBtn.classList.add("main-game-initial");
});

// user
let userScore = 0;
let userHand = document.querySelector(".user-hand");
let userScoreCount = document.querySelector(".user-score-count");
const rockBtnEl = document.querySelector(".rock-btn-el");
const paperBtnEl = document.querySelector(".paper-btn-el");
const scissorsBtnEl = document.querySelector(".scissors-btn-el");
let userSideEl = document.querySelector(".user-side-el");

// bot
let botNumber = 0;
let botScore = 0;
let botHand = document.querySelector(".fa-regular");
let botScoreCount = document.querySelector(".bot-score-count");
let botSideEl = document.querySelector(".bot-side-el");

//game ref
let tieScore = 0;
let winnerEl = document.querySelector(".winner-el");
let tieScoreCount = document.querySelector(".tie-score-count");

// user draw
rockBtnEl.addEventListener("click", function () {
  userHand.className = "fa-regular user-hand";
  userHand.classList.toggle("fa-hand-back-fist");
  botDraw();
  rockWins();
});

paperBtnEl.addEventListener("click", function () {
  userHand.className = "fa-regular user-hand";
  userHand.classList.toggle("fa-hand");
  botDraw();
  paperWins();
});

scissorsBtnEl.addEventListener("click", function () {
  userHand.className = "fa-regular user-hand";
  userHand.classList.toggle("fa-hand-scissors");
  botDraw();
  scissorsWins();
});

// Bot draw
function botDraw() {
  botNumber = Math.trunc(Math.random() * 3 + 1);
  if (botNumber === 1) {
    botHand.className = "fa-regular";
    botHand.classList.toggle("fa-hand-back-fist"); // rock 1
  }
  if (botNumber === 2) {
    botHand.className = "fa-regular";
    botHand.classList.toggle("fa-hand"); //paper 2
  }
  if (botNumber === 3) {
    botHand.className = "fa-regular";
    botHand.classList.toggle("fa-hand-scissors"); //scissors 3
  }
}

//scoring
function playerScores() {
  winnerEl.textContent = "Player Win!";
  userScore++;
  userScoreCount.textContent = userScore;
  userSideEl.classList.add("winner-bg");
  botSideEl.classList.add("loser-bg");
  setTimeout(winAnimate, 750);
}
function botScores() {
  winnerEl.textContent = "Bot Win!";
  botScore++;
  botScoreCount.textContent = botScore;
  botSideEl.classList.add("winner-bg");
  userSideEl.classList.add("loser-bg");
  setTimeout(winAnimate, 750);
}
function noScore() {
  winnerEl.textContent = "Its a Tie!";
  tieScore++;
  tieScoreCount.textContent = tieScore;
  botSideEl.classList.add("tie-bg");
  userSideEl.classList.add("tie-bg");
  setTimeout(winAnimate, 750);
}

function winAnimate() {
  botSideEl.classList.remove("winner-bg");
  userSideEl.classList.remove("winner-bg");
  botSideEl.classList.remove("loser-bg");
  userSideEl.classList.remove("loser-bg");
  botSideEl.classList.remove("tie-bg");
  userSideEl.classList.remove("tie-bg");
}

// Winner
function rockWins() {
  if (rockBtnEl && botNumber === 3) {
    playerScores();
  }
  if (rockBtnEl && botNumber === 2) {
    botScores();
  }
  if (rockBtnEl && botNumber === 1) {
    noScore();
  }
}
function paperWins() {
  if (paperBtnEl && botNumber === 1) {
    playerScores();
  }
  if (paperBtnEl && botNumber === 3) {
    botScores();
  }
  if (paperBtnEl && botNumber === 2) {
    noScore();
  }
}
function scissorsWins() {
  if (scissorsBtnEl && botNumber === 2) {
    playerScores();
  }
  if (scissorsBtnEl && botNumber === 1) {
    botScores();
  }
  if (scissorsBtnEl && botNumber === 3) {
    noScore();
  }
}
