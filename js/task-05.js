const inputEl = document.getElementById("name-input");
const spanEl = document.getElementById("name-output");
inputEl.addEventListener("input", ({ target }) => {
  if (target.value === "") {
    spanEl.textContent = "Anonymous";
  }
  spanEl.textContent = target.value.trim();
});

