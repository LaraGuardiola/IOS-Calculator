const screen = document.querySelector(".calc-screen");
let runningTotal = 0;
let buffer = "0";
let previousOperator;

document.querySelector(".calc-numbers").addEventListener("click", function(event){
    buttonClick(event.target.innerText);
})


function buttonClick(value) {
    if (isNaN(parseInt(value))) {
        console.log("hola");
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

  function rerender() {
    screen.innerText = buffer;
}
