let firstNumber = document.querySelector("#oneNumber");
let secondNumber = document.querySelector("#twoNumber");
let operator = document.querySelector("#symbol");

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

function operation(firstNumber, secondNumber, operator) {
    if (operator === "+"){
        add(firstNumber, secondNumber);
    } else if (operator === "-"){
        minus(firstNumber, secondNumber);
    } else if (operator === "*") {
        mul(firstNumber, secondNumber);
    } else {
        div (firstNumber,secondNumber);
    }
}

const add = function sum(a, b) {
    let op = a + b;
    console.log(op);
}

const minus = function subtract(a, b) {
    let op2 = a - b;
    console.log(op2)
}

const mul = function multiply(a, b) {
    let op3 = a * b;
    console.log(op3);
}

const div = function divide(a, b) {
    let op4 = a/b;
    console.log(op4);
}

const one = document.querySelector(".one");
one.addEventListener("click", () => {
    if (empty3() === false){
        secondNumber.textContent += "1";
    } else if (empty2() === false) {
        secondNumber.textContent = "1";
    } else if (empty() === true) {
        firstNumber.textContent = "1";
    } else {
        firstNumber.textContent += "1";
    }
})

const two = document.querySelector(".two");
two.addEventListener("click", () => {
    if (empty3() === false){
        secondNumber.textContent += "2";
    } else if (empty2() === false) {
        secondNumber.textContent = "2";
    } else if (empty() === true) {
        firstNumber.textContent = "2";
    } else {
        firstNumber.textContent += "2";
    }
})

const three = document.querySelector(".three");
three.addEventListener("click", () => {
    if (empty3() === false){
        secondNumber.textContent += "3";
    } else if (empty2() === false) {
        secondNumber.textContent = "3";
    } else if (empty() === true) {
        firstNumber.textContent = "3";
    } else {
        firstNumber.textContent += "3";
    }
})

const four = document.querySelector(".four");
four.addEventListener("click", () => {
    if (empty3() === false){
        secondNumber.textContent += "4";
    } else if (empty2() === false) {
        secondNumber.textContent = "4";
    } else if (empty() === true) {
        firstNumber.textContent = "4";
    } else {
        firstNumber.textContent += "4";
    }
})

const five = document.querySelector(".five");
five.addEventListener("click", () => {
    if (empty3() === false){
        secondNumber.textContent += "5";
    } else if (empty2() === false) {
        secondNumber.textContent = "5";
    } else if (empty() === true) {
        firstNumber.textContent = "5";
    } else {
        firstNumber.textContent += "5";
    }
})

const six = document.querySelector(".six");
six.addEventListener("click", () => {
    if (empty3() === false){
        secondNumber.textContent += "6";
    } else if (empty2() === false) {
        secondNumber.textContent = "6";
    } else if (empty() === true) {
        firstNumber.textContent = "6";
    } else {
        firstNumber.textContent += "6";
    }
})

const seven = document.querySelector(".seven");
seven.addEventListener("click", () => {
    if (empty3() === false){
        secondNumber.textContent += "7";
    } else if (empty2() === false) {
        secondNumber.textContent = "7";
    } else if (empty() === true) {
        firstNumber.textContent = "7";
    } else {
        firstNumber.textContent += "7";
    }
})

const eight = document.querySelector(".eight");
eight.addEventListener("click", () => {
    if (empty3() === false){
        secondNumber.textContent += "8";
    } else if (empty2() === false) {
        secondNumber.textContent = "8";
    } else if (empty() === true) {
        firstNumber.textContent = "8";
    } else {
        firstNumber.textContent += "8";
    }
})

const nine = document.querySelector(".nine");
nine.addEventListener("click", () => {
    if (empty3() === false){
        secondNumber.textContent += "9";
    } else if (empty2() === false) {
        secondNumber.textContent = "9";
    } else if (empty() === true) {
        firstNumber.textContent = "9";
    } else {
        firstNumber.textContent += "9";
    }
})

const zero = document.querySelector(".zero");
zero.addEventListener("click", () => {
    if (empty3() === false){
        secondNumber.textContent += "0";
    } else if (empty2() === false) {
        secondNumber.textContent = "0";
    } else if (empty() === true) {
        firstNumber.textContent = "0";
    } else {
        firstNumber.textContent += "0";
    }
})

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    firstNumber.textContent = "";
    secondNumber.textContent = "";
    operator.textContent = "";
})

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {

    // let result = operation(firstNumber, secondNumber, operator);
    // console.log(result);
    console.log(typeof(firstNumber));
    let str = String(firstNumber)
    console.log(typeof(str));
    let numero = Number(str);
    console.log(typeof(numero));
    // let dfg = firstNumber.toString();
    // console.log(firstNumber.toString());
//     Number(firstNumber);
//     console.log(typeof(firstNumber));
})

const plus = document.querySelector(".add");
plus.addEventListener("click", () => {
    operator.textContent = "+";
})

const min = document.querySelector(".minus");
min.addEventListener("click", () => {
    operator.textContent = "-";
})

const multiplicar = document.querySelector(".multiply");
multiplicar.addEventListener("click", () => {
    operator.textContent = "*";
})

const dividir = document.querySelector(".divide");
dividir.addEventListener("click", () => {
    operator.textContent = "/";
})





add(1, 2);
minus(2,1);
mul(2, 2);
div(6, 3);

