var btnTranslateMinion = document.querySelector("#btn-translate-minion");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var minionURL = "https://api.funtranslations.com/translate/minion.json";

function getMinionURL(input) {
  return minionURL + "?" + "text=" + input;
}

function clickMinionHandler() {
  var inputText = txtInput.value;
  fetch(getMinionURL(inputText))
    .then((response) => {
      if (!response.ok) {
        throw new Error("something went wrong "+response.status);
      }
      return response.json();
    })
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText; // output
    })
    .catch((err) => alert(err.message));
}

btnTranslateMinion.addEventListener("click", clickMinionHandler);
