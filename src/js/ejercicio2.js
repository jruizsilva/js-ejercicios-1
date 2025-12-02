const btnCountClicks = document.getElementById("btnCountClicks");
const countClicks = document.getElementById("countClicks");

let clickCount = 0;

btnCountClicks.addEventListener("click", function () {
  btnCountClicks.disabled = true;
  clickCount++;
  countClicks.textContent = clickCount;
  btnCountClicks.disabled = false;
});
