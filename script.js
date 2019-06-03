'use strict';

var alertMessage = 10; //существует до выполнения скрипта , глобальная
let second = 2; //создается во время выполнение скрипта , когда скрипт к ней доходит
const pi = 3.14;

var test = 5; {
    let a = 3;
}

var symbol = Symbol();
var obj = {};
console.log(4 / 0);
console.log('string' / 0);

let person = {
    name:'John',
    surname:'Snow',
    age:25,
    isMaried:false
}
//get property 
console.log(person.name);
console.log(person['name']);

let arr = ['plum','png','jpg'];
console.log(arr[1]);
//alert("hello world");
// let answer = confirm('Are you here');
// console.log(answer);
//let answer = prompt('Are you here','Yes');
console.log(typeof(null));