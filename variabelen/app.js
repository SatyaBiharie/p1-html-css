// let name = "satya";

// name = "david";

// let number =0;

// const number1 = 1;
// console.log(number + 1)

// let title = document.getElementById("title");

// title.style.color= 'red';

// let name = "jason"

// let number = 20
// number + 20;

// let num = "20"
// num + 20;

//oefening 1 

let test;

const myName = "satya";

let myAge = 17;

const diploma = true;

let passed;

console.log(myName);
console.log(myAge);
console.log(diploma);
console.log(passed);

//oefening 2

//optellen
let num1 = 1;

let num2 = 7;

let answer = num1 + num2;
console.log(answer)

//aftrekken
let answer2 = num1 - num2
console.log(answer2)

//delen
let answer3 = num1 / num2;
console.log(answer3)

//vermenigvuldigen
let answer4 = num1 * num2;
console.log(answer4)



let output = document.getElementById('title')

function add(){
    num1 = num1 + 1
    console.log(num1);
    output.innerText = num1++
}

function minus(){
    num1 = num1 - 1
    console.log(num1);
    output.innerText = num1--
}

function reset(){
    console.log(num1);
    output.innerText = num1 = 0
}