let words;

fetch('./assets/json/words.json').then(r => r.json()).then(data => words = data);

/**
 * Changes the message displayed on the main page
 * @param acronym {string} The original acronym
 * @param phrase {string} The filled out phrase
 */
function changeMessage(acronym, phrase) {
  document.getElementById("generatedphrase").innerHTML = acronym + " stands for: " + phrase;
  document.getElementById("startBttn").textContent = "Again?";
}

/**
 * Generates an acronym and changes the message
 */
function generateAcronym() {
  let acronym = document.getElementById("acronym").value;
  acronym = acronym.toLowerCase();
  const letters = acronym.split("");
  let phrase = "";
  for (let i = 0; i < letters.length; i++) {
    phrase += generateWord(letters[i]);
    phrase += " ";
  }
  changeMessage(acronym, phrase);
}

/**
 * Generates a word for a given letter, or "" for invalid character
 * @param letter {string} The letter
 * @returns {string} A random word starting with the specified letter
 */
function generateWord(letter) {
  let array = [];
  if (letter.toString().toLowerCase().match(/[a-z]/))
    array = words[letter].split(',');

  if (array.length > 0)
    return array[Math.floor(Math.random() * array.length)];
  else
    return "";
}
