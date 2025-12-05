import { generatePassword } from "../utils/generatePassword";

const passwordGenerated = document.getElementById("passwordGenerated");
const formGeneratePassword = document.getElementById("formGeneratePassword");
const passwordLengthInput = document.getElementById("passwordLength");

formGeneratePassword.addEventListener("submit", (e) => {
  e.preventDefault();
  const passwordLength = passwordLengthInput.value;
  if (passwordLength === "") {
    passwordGenerated.textContent = "La longitud es requerida";
    return;
  }

  if (passwordLength < 4) {
    passwordGenerated.textContent =
      "La longitud de la contraseña debe ser mayor o igual a 4";
    return;
  }

  const password = generatePassword(passwordLength);

  passwordGenerated.textContent = password;
});
