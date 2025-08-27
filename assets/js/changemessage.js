let words;
let real;

fetch('./assets/json/words.json').then(r => r.json()).then(data => words = data);
fetch('./assets/json/real.json').then(r => r.json()).then(data => real = data);

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
  if (real.hasOwnProperty(acronym)) {
    phrase = retrievePhrase(acronym);
    changeMessage(acronym, phrase);
  } 
  else {
    const letters = acronym.split("");
    let phrase = "";
    for (let i = 0; i < letters.length; i++) {
      phrase += generateWord(letters[i]);
      phrase += " ";
    }
    changeMessage(acronym, phrase);
  }
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

/**
 * Retrieves a phrase for a given acronym, or "" for invalid character
 * @param phrase {string} The phrase
 * @returns {string} A defined phrase for the specified acronym
 */
function retrievePhrase(phrase) {
  let array = [];
  if (phrase.toString().toLowerCase())
    array = real[phrase].split(',');

  if (array.length > 0)
    return array[Math.floor(Math.random() * array.length)];
  else
    return "";
}
