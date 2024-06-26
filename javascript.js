let firstNumber = 2;
let secondNumber = 3;
let operator = "+";

const oper = function operate(firstNumber, secondNumber, operator) {
    if (operator === "+"){
        add(firstNumber, secondNumber);
    } else {
        console.log("a");
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
    
    alert("Boba Laura");  
})


add(1, 2);
minus(2,1);
mul(2, 2);
div(6, 3);
oper(firstNumber, secondNumber, operator);
