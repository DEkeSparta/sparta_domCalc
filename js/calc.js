var display = document.getElementById("screen");
var defaultText = display.innerText;
var inputState = 0; //0-first num, 1-operator, 2-second num, 3-equals

var num1,num2,op;

var numbers = document.getElementsByClassName("buttonNum");
var operators = document.getElementsByClassName("operator");

for(var numBtn of numbers){
  let integer = parseInt(numBtn.innerText);
  numBtn.addEventListener("click",function(){
    if(inputState==0){
      num1 = integer;
      display.innerText = integer;
      inputState++;
    }
    else if(inputState==2){
      num2 = integer;
      display.innerText = integer;
      inputState++;
    }
    else{
      display.innerText = defaultText;
      inputState = 0;
    }
  });
}

for(var opBtn of operators){
  let symbol = opBtn.innerText;
  opBtn.addEventListener("click",function(){
    if(inputState==1){
      op = symbol;
      display.innerText = symbol;
      inputState++;
    }
    else{
      display.innerText = defaultText;
      inputState = 0;
    }
  });
}
