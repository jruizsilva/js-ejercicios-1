const input = document.getElementById("input");
const list = document.getElementById("list");

const items = ["Gato", "Pez", "Perro", "Mono"];

input.addEventListener("keyup", (event) => {
  const inputValue = event.target.value;
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(inputValue.toLowerCase())
  );
  list.innerHTML = "";
  filteredItems.forEach((item) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.textContent = item;

    list.appendChild(li);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  items.forEach((item) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.textContent = item;

    list.appendChild(li);
  });
});
