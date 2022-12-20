var btnTranslateYoda = document.querySelector("#btn-translate-yoda");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var yodaURL = "https://api.funtranslations.com/translate/yoda.json";

function getYodaURL(input) {
  return yodaURL + "?" + "text=" + input;
}

function clickYodaHandler() {
  var inputText = txtInput.value;
  fetch(getYodaURL(inputText))
    .then((response) => {
      if (!response.ok) {
        throw new Error("Something went wrong "+response.status)
      }
      return response.json();
    })
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText; // output
    })
    .catch((err) => alert(err.message));
}

btnTranslateYoda.addEventListener("click", clickYodaHandler);
