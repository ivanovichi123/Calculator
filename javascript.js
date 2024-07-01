let firstNumber = document.querySelector("#oneNumber");
let secondNumber = document.querySelector("#twoNumber");
let operator = document.querySelector("#symbol");
let primerNumero = "";
let segundoNumero = "";
let operador = "";
let result = 0;

function empty() {
    let isEmpty = firstNumber.textContent.trim() === "";
    return isEmpty;
}

function empty2() {
    let isEmpty2 = operator.textContent.trim() === "";
    return isEmpty2;
}

function empty3() {
    let isEmpty3 = secondNumber.textContent.trim() === "";
    return isEmpty3;
}

function operation(number1, number2, operador) {
    if (operador === "+") {
        result = sum(number1, number2);
        console.log(number1);
        console.log(number2);
        firstNumber.textContent = "";
        secondNumber.textContent = "";
        operator.textContent = "";
        operador = "";
        firstNumber.textContent = result;
        primerNumero = result.toString();
    } else if (operador === "-"){
        result = subtract(number1, number2);
        console.log(number1);
        console.log(number2);
        firstNumber.textContent = "";
        secondNumber.textContent = "";
        operator.textContent = "";
        operador = "";
        firstNumber.textContent = result;
        primerNumero = result.toString();
    } else if (operador === "*") {
        result = multiply(number1, number2);
        console.log(number1);
        console.log(number2);
        firstNumber.textContent = "";
        secondNumber.textContent = "";
        operator.textContent = "";
        operador = "";
        firstNumber.textContent = result;
        primerNumero = result.toString();
    } else if (operador === "/") {
        result = divide(number1, number2);
        console.log(number1);
        console.log(number2);
        firstNumber.textContent = "";
        secondNumber.textContent = "";
        operator.textContent = "";
        operador = "";
        firstNumber.textContent = result;
        primerNumero = result.toString();
    } else {
        console.log("oh no")
    }
}

function sum(a, b) {
    let op = a + b;
    console.log(op);
    return op;
}

function subtract(a, b) {
    let op2 = a - b;
    console.log(op2)
    return op2;
}

function multiply(a, b) {
    let op3 = a * b;
    console.log(op3);
    return op3;
}

function divide(a, b) {
    let op4 = a/b;
    console.log(op4);
    return op4;
}

const one = document.querySelector(".one");
one.addEventListener("click", () => {
    if (empty3() === false){
        secondNumber.textContent += "1";
        segundoNumero += "1";
    } else if (empty2() === false) {
        secondNumber.textContent = "1";
        segundoNumero = "1";
    } else if (empty() === true) {
        firstNumber.textContent = "1";
        primerNumero = "1"
    } else {
        firstNumber.textContent += "1";
        primerNumero += "1";
    }
})

const two = document.querySelector(".two");
two.addEventListener("click", () => {
    if (empty3() === false){
        secondNumber.textContent += "2";
        segundoNumero += "2";
    } else if (empty2() === false) {
        secondNumber.textContent = "2";
        segundoNumero = "2";
    } else if (empty() === true) {
        firstNumber.textContent = "2";
        primerNumero = "2";
    } else {
        firstNumber.textContent += "2";
        primerNumero += "2";
    }
})

const three = document.querySelector(".three");
three.addEventListener("click", () => {
    if (empty3() === false){
        secondNumber.textContent += "3";
        segundoNumero += "3";
    } else if (empty2() === false) {
        secondNumber.textContent = "3";
        segundoNumero = "3";
    } else if (empty() === true) {
        firstNumber.textContent = "3";
        primerNumero = "3"
    } else {
        firstNumber.textContent += "3";
        primerNumero += "3";
    }
})

const four = document.querySelector(".four");
four.addEventListener("click", () => {
    if (empty3() === false){
        secondNumber.textContent += "4";
        segundoNumero += "4";
    } else if (empty2() === false) {
        secondNumber.textContent = "4";
        segundoNumero = "4";
    } else if (empty() === true) {
        firstNumber.textContent = "4";
        primerNumero = "4"
    } else {
        firstNumber.textContent += "4";
        primerNumero += "4";
    }
})

const five = document.querySelector(".five");
five.addEventListener("click", () => {
    if (empty3() === false){
        secondNumber.textContent += "5";
        segundoNumero += "5";
    } else if (empty2() === false) {
        secondNumber.textContent = "5";
        segundoNumero = "5";
    } else if (empty() === true) {
        firstNumber.textContent = "5";
        primerNumero = "5"
    } else {
        firstNumber.textContent += "5";
        primerNumero += "5";
    }
})

const six = document.querySelector(".six");
six.addEventListener("click", () => {
    if (empty3() === false){
        secondNumber.textContent += "6";
        segundoNumero += "6";
    } else if (empty2() === false) {
        secondNumber.textContent = "6";
        segundoNumero = "6";
    } else if (empty() === true) {
        firstNumber.textContent = "6";
        primerNumero = "6"
    } else {
        firstNumber.textContent += "6";
        primerNumero += "6";
    }
})

const seven = document.querySelector(".seven");
seven.addEventListener("click", () => {
    if (empty3() === false){
        secondNumber.textContent += "7";
        segundoNumero += "7";
    } else if (empty2() === false) {
        secondNumber.textContent = "7";
        segundoNumero = "7";
    } else if (empty() === true) {
        firstNumber.textContent = "7";
        primerNumero = "7"
    } else {
        firstNumber.textContent += "7";
        primerNumero += "7";
    }
})

const eight = document.querySelector(".eight");
eight.addEventListener("click", () => {
    if (empty3() === false){
        secondNumber.textContent += "8";
        segundoNumero += "8";
    } else if (empty2() === false) {
        secondNumber.textContent = "8";
        segundoNumero = "8";
    } else if (empty() === true) {
        firstNumber.textContent = "8";
        primerNumero = "8"
    } else {
        firstNumber.textContent += "8";
        primerNumero += "8";
    }
})

const nine = document.querySelector(".nine");
nine.addEventListener("click", () => {
    if (empty3() === false){
        secondNumber.textContent += "9";
        segundoNumero += "9";
    } else if (empty2() === false) {
        secondNumber.textContent = "9";
        segundoNumero = "9";
    } else if (empty() === true) {
        firstNumber.textContent = "9";
        primerNumero = "9"
    } else {
        firstNumber.textContent += "9";
        primerNumero += "9";
    }
})

const zero = document.querySelector(".zero");
zero.addEventListener("click", () => {
    if (empty3() === false){
        secondNumber.textContent += "0";
        segundoNumero += "0";
    } else if (empty2() === false) {
        secondNumber.textContent = "0";
        segundoNumero = "0";
    } else if (empty() === true) {
        firstNumber.textContent = "0";
        primerNumero = "0"
    } else {
        firstNumber.textContent += "0";
        primerNumero += "0";
    }
})

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    firstNumber.textContent = "";
    secondNumber.textContent = "";
    operator.textContent = "";
    operador = "";
})

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    let numero1 = Number(primerNumero);
    let numero2 = Number(segundoNumero);
    operation(numero1, numero2, operador);
})

function igual() {
    let numero1 = Number(primerNumero);
    let numero2 = Number(segundoNumero);
    operation(numero1, numero2, operador);
    operador = "+";
    operator.textContent = "+";
    secondNumber.textContent = "";
}

const plus = document.querySelector(".add");
plus.addEventListener("click", () => {
    if (operador === "+" && secondNumber.textContent !== "") {
        igual();
    } else {
        operator.textContent = "+";
        operador = "+";
    }
})

const min = document.querySelector(".minus");
min.addEventListener("click", () => {
    operator.textContent = "-";
    operador = "-";
})

const multiplicar = document.querySelector(".multiply");
multiplicar.addEventListener("click", () => {
    operator.textContent = "*";
    operador = "*";
})

const dividir = document.querySelector(".divide");
dividir.addEventListener("click", () => {
    operator.textContent = "/";
    operador = "/";
})

