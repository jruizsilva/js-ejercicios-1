import { generateRandomColor } from "../utils/randomColor";

const btnChangeColor = document.getElementById("btnChangeColor");
const body = document.querySelector("body");
const currentColor = document.getElementById("currentColor");

btnChangeColor.addEventListener("click", () => {
  const newRandomColor = generateRandomColor();
  body.style.backgroundColor = newRandomColor;
  document.getElementsByClassName("hide")[0].style.display = "block";

  currentColor.textContent = newRandomColor;
});
