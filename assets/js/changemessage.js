function changeMessage(phrase) {
  document.getElementById("generatedphrase").innerHTML = document.getElementById("acronym").value + " stands for: " + phrase;
  document.getElementById("startBttn").textContent = "Again?";
}

function generateAcronym() {
  let acronym = document.getElementById("acronym").value;
  acronym = acronym.toLowerCase();
  const letters = acronym.split("");
  let phrase = "";
  for (let i = 0; i < letters.length; i++) {
    phrase += generateWord(letters[i]);
    phrase += " ";
  }
  changeMessage(phrase);
}

function generateWord(letter) {
  let array = "";
  if (letter.toString().toLowerCase().match(/[a-z]/))
    array = words[letter].split(',');
  if (array !== "")
    return array[Math.floor(Math.random() * array.length)];
  else
    return "";
}
