var display = document.getElementById("screen");
var defaultText = display.innerText;
var inputState = 0; //0-first num, 1-operator, 2-second num, 3-equals

var num1=0,num2=0,op,ans;

var numbers = document.getElementsByClassName("buttonNum");
var operators = document.getElementsByClassName("operator");
var ACBut = document.getElementsByClassName("buttonClear")[0];
var eqBut = document.getElementsByClassName("equals")[0];

for(var numBtn of numbers){
  let integer = parseInt(numBtn.innerText);
  numBtn.addEventListener("click",function(){
    if(inputState==0){
      num1 = integer;
      display.innerText = num1;
      inputState = 1;
    }
    else if(inputState==1){
      num1 = num1*10 + integer;
      display.innerText = num1;
    }
    else if(inputState==2){
      num2 = integer;
      display.innerText = num2;
      inputState = 3;
    }
    else if(inputState==3){
      num2 = num2*10 + integer;
      display.innerText = num2;
    }
  });
}

for(var opBtn of operators){
  let symbol = opBtn.innerText;
  opBtn.addEventListener("click",function(){
    if(inputState==1 || (inputState==2 && num2==0)){
      op = symbol;
      display.innerText = symbol;
      inputState = 2;
    }
    else if(inputState==0 && display.innerText!=defaultText){
      num1 = ans;
      op = symbol;
      display.innerText = symbol;
      inputState = 2;
    }
  });
}

eqBut.addEventListener("click",function(){
  if(inputState==3){
    ans = calculate(num1,num2,op);
    display.innerText = ans;
    inputState = 0;
    num1 = 0;
    num2 = 0;
  }
})

ACBut.addEventListener("click",function(){
  display.innerText = defaultText;
  inputState = 0;
  num1 = 0;
  num2 = 0;
})

function calculate(a, b, action){
  switch(action){
    case "*": return a*b;
    case "/": return a/b;
    case "-": return a-b;
    case "+": return a+b;
  }
}
