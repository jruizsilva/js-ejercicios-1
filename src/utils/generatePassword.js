export const generatePassword = (longitud = 4) => {
  const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const minusculas = "abcdefghijklmnopqrstuvwxyz";
  const numeros = "0123456789";
  const caracteres = "!\"'#$%&()*+,-./:;<=>?@[]^_`{|}~";

  const letras = mayusculas + minusculas;
  const caracteresDisponibles = [letras, numeros, caracteres];
  let password = "";

  for (let i = 0; i < longitud; i++) {
    const randomIndex = Math.floor(
      Math.random() * caracteresDisponibles.length
    );
    const randomChar = Math.floor(
      Math.random() * caracteresDisponibles[randomIndex].length
    );
    password += caracteresDisponibles[randomIndex][randomChar];
  }

  return password;
};
