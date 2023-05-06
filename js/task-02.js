const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingrEl = document.getElementById("ingredients");
const a = ingredients.map((element) => {
  const b = document.createElement("li");
  b.textContent = `${element}`;
  b.classList.add("item");
  return b
});
ingrEl.append(...a);

console.log(ingrEl);
