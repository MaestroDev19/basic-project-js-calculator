let textArea = document.querySelector("#textArea");

function digits(digit) {
  textArea.value += digit;
}

function opps(sign) {
  textArea.value += sign;
}

function root() {
  textArea.value += Math.sqrt(textArea.value);
}

function solve() {
  answer = eval(textArea.value);
  textArea.value = answer;
}
function del() {
  textArea.value = textArea.value.slice(0, -1);
}
function cleanUp() {
  textArea.value = "";
}
