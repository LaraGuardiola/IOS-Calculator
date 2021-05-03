class Mates{
    constructor(){

    }

    static sumar(x,y){
        return x + y;
    }

    static restar(x,y){
        return x - y;
    }

    static multiplicar(x,y){
        return x * y;
    }

    static dividir(x,y){
        return x / y;
    }
}

let screen = document.querySelector(".calc.screen");
let button = document.querySelectorAll(".calc-button");


console.log(button[3].value);
console.log(Mates.sumar(1,2));
console.log(Mates.restar(2,1));
console.log(Mates.multiplicar(2,4));
console.log(Mates.dividir(10,3));

