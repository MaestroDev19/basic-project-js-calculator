let textArea = document.querySelector('#textArea');


function num1(){
    textArea.value += "1";
}

function num2(){
    textArea.value +="2"
}
function num3(){
    textArea.value +="3"
}

function num4(){
    textArea.value +="4"
}

function num5(){
    textArea.value +="5"
}

function num6(){
    textArea.value +="6"
}

function num7(){
    textArea.value +="7"
}

function num8(){
    textArea.value +="8"
}

function num9(){
    textArea.value +="9"
}

function num() {
    textArea.value +="0"
}

function add(){
    textArea.value += "+"
}

function sub(){
    textArea.value += "-"
}

function solve(){
    answer = eval(textArea.value);
    textArea.value = answer;
}

function clear(){
    textArea.value ="";
    textArea.textContent = "";
}