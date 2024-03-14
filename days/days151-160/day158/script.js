const container = document.querySelector(".container");
const NUM_ITEMS = 300;

for (let i = 0; i < NUM_ITEMS; i++) {
  let item = document.createElement("div");
  item.classList.add("item");
  container.appendChild(item);
}
