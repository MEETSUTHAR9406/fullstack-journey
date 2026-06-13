let game = [];
let user = [];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let btns = ["pink", "teal", "orange", "purple"];

let b = document.querySelector('body');

document.addEventListener("keydown", function () {
  if (started == false) {
    started = true;
    levelUp();
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");

  setTimeout(function () {
    btn.classList.remove("flash");
  }, 200);
}

function userFlash(btn) {
  btn.classList.add("flash");

  setTimeout(function () {
    btn.classList.remove("flash");
  }, 200);
}

function levelUp() {
  user = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * btns.length);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);

  game.push(randColor);
  console.log("game pattern:", game);

  btnFlash(randBtn);
}

function checkAns(idx) {
  if (user[idx] === game[idx]) {
    if (user.length === game.length) {
      setTimeout(levelUp, 1000);
    }
  } else if (user[idx] !== game[idx]) {
    b.classList.add("alert");
    setTimeout( function () {
      b.classList.remove("alert");
    }, 200);
    reset();
  } else {
    h2.innerHTML = `Game Over! Your score was <b>${level}</b><br>Press any key to restart`;
    reset();
  }
}

function btnPress() {
  if (started == false) {
    return;
  }

  let btn = this;
  userFlash(btn);

  let userColor = btn.getAttribute("id");
  user.push(userColor);
  console.log("user pattern:", user);

  checkAns(user.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for (let btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  game = [];
  user = [];
  level = 0;
}
