const countValue = document.querySelector("#value");
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
let counterValue = 0;
btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  countValue.textContent = counterValue;
});
btnIncrement.addEventListener("click", () => {
  counterValue += 1;
  countValue.textContent = counterValue;
});