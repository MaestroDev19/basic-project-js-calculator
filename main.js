let textArea = document.querySelector('#textArea');

 function digits(digit){
    textArea.value += digit;
 }

function add(){
    textArea.value += "+";
}

function sub(){
    textArea.value += "-";
}

function mul(){
    textArea.value += "*";
}

function div(){
    textArea.value += "÷";
}

function exp(){
    textArea.value += "**";
}

function mod(){
    textArea.value += "%";
}

function b_left(){
    textArea.value += "(";
}

function b_right(){
    textArea.value += ")";
}

function dec(){
    textArea.value +=".";
}

function root(){
    textArea.value += Math.sqrt(textArea.value) ;
}

function solve(){
    answer = eval(textArea.value);
    textArea.value = answer;
}
 function del(){
    textArea.value = textArea.value.slice(0,-1);
 }
function cleanUp() {
    textArea.value = "";
}