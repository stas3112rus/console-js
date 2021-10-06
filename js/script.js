"use strict";

let number = 4.5;
let a = -Infinity;
let b = NaN;

const person = `6`;

let bool = true;
bool = false;

const obj = {
    name:"John",
    age: 25,
    isMarried: false
};

//console.log(obj.age);

console.log(obj["name"]);

let arr = ['plum.png', 'orange.jpg', 'aple'];

console.log(arr[1]);

// const result = confirm("Are you here?");

// const answer =+prompt("Вам есть 18?", "18")
// console.log(typeof(answer));

// const answers = [];

// answers[0] = prompt("как ваше имя", "");
// answers[1] = prompt("как ваша фамилия", "");
// answers[2] = prompt("Какой ваш возрас", "");

// document.write(answers);

const category = "toys";

console.log(`https://someurl.com/${category}/5/`);

const user = "Stas";
alert(`${user} добрый день`);


let incr = 10;
let decr = 10;

incr++;
decr--;