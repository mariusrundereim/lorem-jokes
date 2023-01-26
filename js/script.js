import { jokes, jokesArray } from "/data/jokes.js";

// Lage en array / loop
// Generere en tilfeldig vits mellom 1-6

console.log(jokes);

const jokeContainer = document.querySelector(".joke-section h3");
const generateBtn = document.querySelector(".btn-1");

generateBtn.addEventListener("click", (event) => {
  const index = randomNumber(6);
  jokeContainer.innerHTML = jokesArray[index].quote;
  const stars = document.querySelector(".stars");
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

// Switch

/*
  switch (jokesArray[index].rating) {
    case 1:
      stars.innerHTML = "X";
      break;
    case 2:
      stars.innerHTML = "XX";
      break;
  }
*/
