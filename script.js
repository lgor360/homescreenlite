let SSelect = document.querySelector("[name='sselect']");
SSelect.value = LoadSelectValue(SSelect);
let TSelect = document.querySelector("[name='tselect']");
TSelect.value = LoadSelectValue(TSelect);
Themes();
var input = document.getElementById("sinput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    console.log("был нажат enter");
    document.getElementById("sbutton").click();
  }
});
var dialog = document.querySelector('dialog');
document.querySelector('#dialogopen').onclick = function () {
  dialog.show();
}
document.querySelector('#dialogclose').onclick = function () {
  dialog.close();
  Themes();
}

function SaveSelectValue(el) {
  localStorage.setItem(el.name, el.value);
}
function LoadSelectValue(el) {
  return localStorage.getItem(el.name);
}
function SearchEngine() {
  var NSS = document.getElementById("searchselect").value;
  if (NSS === "google") {
    var SSystem = 'https://www.google.com/search?q=';
    Search(SSystem);
  } else if (NSS === "bing") {
    var SSystem = 'https://www.bing.com/search?q=';
    Search(SSystem);
  } else if (NSS === "ya") {
    var SSystem = 'https://yandex.ru/search/?text=';
    Search(SSystem);
  } else if (NSS === "ddg") {
    var SSystem = 'https://duckduckgo.com/?q=';
    Search(SSystem);
  } else {
    document.getElementById("dialogopen").click();
  }
}  
function Search(SSystem) {
  var sInput = document.getElementById("sinput").value;
  console.log("я вытащил поле");
  let sNeed = SSystem += sInput;
  console.log("я прибавил гугл и запрос");
  location.href = sNeed;
  console.log("перенаправляю...");
}
function LoadThemes(color) {
  var link = document.createElement( "link" );
  link.href = '/homescreenlite/' + color;
  link.type = "text/css";
  link.rel = "stylesheet";
  link.media = "screen,print";

  document.getElementsByTagName( "head" )[0].appendChild( link );
}
function Themes() {
  var NT = document.getElementById("themes").value;
  if (NT === "red") LoadThemes("red.css");
  else if (NT === "orange") LoadThemes("orange.css");
  else console.log(NT);
}
