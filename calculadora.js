const screen = document.querySelector(".calc-screen");
let runningTotal = 0;
let buffer = "0";
let previousOperator;

function buttonClick(value) {
    if (isNaN(parseInt(value))) {   //parsea la cadena value y si corresponde a un numero, va a adherir la nueva cadena al buffer, si corresponde a simbolo lo manejara de la manera correspondiente
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    rerender(); 
}

function handleNumber(value) {
    if (buffer === "0") {
      buffer = value;
    } else {
      buffer += value;
    }
}

function handleSymbol(value) {
    switch(value){
        case "C":
            buffer = "0";
            runningTotal = 0;
            break;
        case "←":
            if (buffer.length === 1) {
                buffer = "0";
              } else {
                buffer = buffer.substring(0, buffer.length - 1);
              }
            break;
        case "÷":
        case "x":
        case "+":
        case "-":
            handleMath(value);
            break;
        case "=":
            if (previousOperator === null) {
                //dos numeros se necesitan para una operacion, si no los hay devuelve el mismo resultado (hace nada)
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = +runningTotal.toFixed(2); // UNARY PLUS OPERATOR - define que el buffer es una variable tipo number (lo parsea igual que parseInt(runningTotal)) concretamente el runningTotal que se ha manejado en la funcion flushOperation(intBuffer)
            runningTotal = 0;
            break;
    }
}

function handleMath(value) {
    if (buffer === "0") {
      // do nothing
      return;
    }
  
    const intBuffer = parseInt(buffer);
    if (runningTotal === 0) {
      runningTotal = intBuffer;
    } else {
      flushOperation(intBuffer);
    }
    previousOperator = value;
    buffer = "0"; //vuelve a 0 puesto que se ha pulsado un simbolo de operador y ya ha quedado registrado el operador previo (previousOperator),y ahora toca comenzar con el siguente operador para poder hacer la operacion matematica
  }
  
  function flushOperation(intBuffer) {
    if (previousOperator === "+") {
      runningTotal += intBuffer;
    } else if (previousOperator === "-") {
      runningTotal -= intBuffer;
    } else if (previousOperator === "x") {
      runningTotal *= intBuffer;
    } else {
      runningTotal /= intBuffer;
    }
}

  function rerender() {
    screen.innerText = buffer;
}

/*se añade un event listener a cada uno de los elementos de la section .calc-numbers en cual envia el valor del nodo a la funcion buttonClick 
con el fin de ver si un NUMERO o SIMBOLO */


function init(){
    document.querySelector(".calc-buttons").addEventListener("click", function(event){
        buttonClick(event.target.innerText);
    });    
}

init();

