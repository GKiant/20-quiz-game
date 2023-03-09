const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const decodedString = (string) => {
  const decodedStringElement = document.createElement("textarea");
  decodedStringElement.innerHTML = string;
  const decodedString = decodedStringElement.value;

  return decodedString;
};

export { shuffle, decodedString };
