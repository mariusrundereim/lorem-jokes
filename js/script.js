import { jokesArray } from "/data/jokes.js";

const jokeContainer = document.querySelector(".joke-section h3");
const jokeAuthor = document.querySelector(".author");
const generateBtn = document.querySelector(".btn-1");

generateBtn.addEventListener("click", (event) => {
  const index = randomNumber(6);
  const stars = document.querySelector(".stars");

  jokeContainer.innerHTML = jokesArray[index].quote;

  jokeAuthor.innerHTML = jokesArray[index].owner;

  stars.innerHTML = "";
  for (let i = 0; i < jokesArray[index].rating; i++) {
    // stars.innerHTML += "&#42;";
    stars.innerHTML += `<i class="fa-regular fa-face-grin-tears"></i>`;
  }
  console.log(event);
});

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}
