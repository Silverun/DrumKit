"use strict";

const drums = document.querySelectorAll(".drum");

const buttonSound = function (key) {
  switch (key) {
    case "w":
      const tom1 = new Audio("sounds\\tom-1.mp3");
      tom1.play();
      break;

    case "a":
      const tom2 = new Audio("sounds\\tom-2.mp3");
      tom2.play();
      break;

    case "s":
      const tom3 = new Audio("sounds\\tom-3.mp3");
      tom3.play();
      break;

    case "d":
      const tom4 = new Audio("sounds\\tom-4.mp3");
      tom4.play();
      break;

    case "j":
      const snare = new Audio("sounds\\snare.mp3");
      snare.play();
      break;

    case "k":
      const crash = new Audio("sounds\\crash.mp3");
      crash.play();
      break;

    case "l":
      const kick = new Audio("sounds\\kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(key);
      break;
  }
};

const buttonAnimation = function (key) {
  document.querySelector(`.${key}`).classList.add("pressed");
  setTimeout(function () {
    document.querySelector(`.${key}`).classList.remove("pressed");
  }, 150);
};

for (let i = 0; i <= drums.length - 1; i++) {
  drums[i].addEventListener("click", function () {
    buttonSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  buttonSound(event.key);
  buttonAnimation(event.key);
});
