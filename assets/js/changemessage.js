function changeMessage(phrase) {
  document.getElementById("generatedphrase").innerHTML = phrase;
  document.getElementById("startBttn").textContent = "Again?";
}

function generateAcronym() {
  var acronym = document.getElementById("acronym").value;
  acronym = acronym.toLowerCase();
  var letters = acronym.split("");
  var phrase = "";
  for (var i = 0; i < letters.length; i++) {
    phrase += generateWord(letters[i]);
    phrase += " ";
  }
  changeMessage(phrase);
}

function generateWord(letter) {
  var array = "";
  if (letter == 'a')
    array = awords.split(",");
  if (letter == 'b')
    array = bwords.split(",");
  if (letter == 'c')
    array = cwords.split(",");
  if (letter == 'd')
    array = dwords.split(",");
  if (letter == 'e')
    array = ewords.split(",");
  if (letter == 'f')
    array = fwords.split(",");
  if (letter == 'g')
    array = gwords.split(",");
  if (letter == 'h')
    array = hwords.split(",");
  if (letter == 'i')
    array = iwords.split(",");
  if (letter == 'j')
    array = jwords.split(",");
  if (letter == 'k')
    array = kwords.split(",");
  if (letter == 'l')
    array = lwords.split(",");
  if (letter == 'm')
    array = mwords.split(",");
  if (letter == 'n')
    array = nwords.split(",");
  if (letter == 'o')
    array = owords.split(",");
  if (letter == 'p')
    array = pwords.split(",");
  if (letter == 'q')
    array = qwords.split(",");
  if (letter == 'r')
    array = rwords.split(",");
  if (letter == 's')
    array = swords.split(",");
  if (letter == 't')
    array = twords.split(",");
  if (letter == 'u')
    array = uwords.split(",");
  if (letter == 'v')
    array = vwords.split(",");
  if (letter == 'w')
    array = wwords.split(",");
  if (letter == 'x')
    array = xwords.split(",");
  if (letter == 'y')
    array = ywords.split(",");
  if (letter == 'z')
    array = zwords.split(",");
  if (array != "")
    return array[Math.floor(Math.random() * array.length)];
  else
    return "";
}
