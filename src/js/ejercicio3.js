const btnAdd = document.getElementById("btnAdd");
const list = document.getElementById("list");
const input = document.getElementById("input");

btnAdd.addEventListener("click", () => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = input.value;

  const buttonDelete = document.createElement("button");
  buttonDelete.textContent = "X";
  buttonDelete.addEventListener("click", () => {
    buttonDelete.disabled = true;
    li.remove();
    buttonDelete.disabled = false;
  });

  li.appendChild(span);
  li.appendChild(buttonDelete);

  list.appendChild(li);
  input.value = "";
});
