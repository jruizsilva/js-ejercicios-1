export const generateRandomColor = () => {
  const hex = "0123456";
  let color = "#";
  for (let i = 1; i <= 3; i++) {
    let currentRandomColor = Math.floor(Math.random() * hex.length);
    color += hex[currentRandomColor].repeat(2);
  }
  return color;
};
