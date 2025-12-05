import { generatePassword } from "../utils/generatePassword";

const passwordGenerated = document.getElementById("passwordGenerated");
const formGeneratePassword = document.getElementById("formGeneratePassword");

formGeneratePassword.addEventListener("submit", (e) => {
  e.preventDefault();
  const passwordLength = document.getElementById("passwordLength").value;

  const password = generatePassword(passwordLength);

  passwordGenerated.textContent = password;
});
