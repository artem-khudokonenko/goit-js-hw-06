function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const btnEl = bodyEl.querySelector(".change-color");
const spanEl = bodyEl.querySelector(".color");
btnEl.addEventListener("click", randomColor);
function randomColor() {
  spanEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = getRandomHexColor();
}
