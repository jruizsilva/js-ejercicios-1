const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const btnPlus = document.getElementById("btnPlus");
const btnSubtract = document.getElementById("btnSubtract");
const btnMultiply = document.getElementById("btnMultiply");
const btnSplit = document.getElementById("btnSplit");
const btnCalculate = document.getElementById("btnCalculate");
const resultadoCalculadora = document.getElementById("resultadoCalculadora");

btnCalculate.disabled = true;

let operation = "";

btnPlus.addEventListener("click", () => {
  operation = "+";
  validateInputs();
});
btnSubtract.addEventListener("click", () => {
  operation = "-";
  validateInputs();
});
btnMultiply.addEventListener("click", () => {
  operation = "*";
  validateInputs();
});
btnSplit.addEventListener("click", () => {
  operation = "/";
  validateInputs();
});
btnCalculate.addEventListener("click", () => {
  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value);
  let result = 0;

  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        resultadoCalculadora.textContent = `No se puede dividir por cero`;
        btnCalculate.disabled = true;
        return;
      }
      result = num1 / num2;
      break;
    default:
      break;
  }

  resultadoCalculadora.textContent = `Resultado: ${result}`;
  btnCalculate.disabled = true;
});

const validateInputs = () => {
  if (input1.value !== "" && input2.value !== "" && operation !== "") {
    btnCalculate.disabled = false;
  } else {
    btnCalculate.disabled = true;
  }
};
