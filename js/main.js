// Prototypes

// const person = new Object({
//     name: "MMM",
//     age: 17,
//     greet() {
//         console.log('hello');
//     }
// })
// console.log(person);
// console.log(person.toString());

// const arr = [1, 2, 3, 4, 5]

// function multBy(arr, nf) {

// }

// Замыкание

// const createCalcFunc(n) {
//     return function() {
//         console.log(1000 * n);
//     }
// }
// myFunc()
// var say = 'Hi'

// function myFunc() {
//     var say = 'Hello'
//     console.log(say);
// }

// function sayHiBye(firstName, lastName) {

//     // функция-помощник, которую мы используем ниже
//     function getFullName() {
//         return firstName + " " + lastName;
//     }

//     alert("Hello, " + getFullName());
//     alert("Bye, " + getFullName());

// }
// sayHiBye('Mashxurbek', 'Muhammadjonov')

// function bind(context, func) {
//     return function(...args) {
//         func.apply(context, args)
//     }
// }

// const person1 = { name: 'Mashxurbek', age: 17, jobState: 'unemployed', }
// const person2 = { name: 'Jack', age: 25, jobState: 'employed', }

// bind(person1, logPerson)()
// bind(person2, logPerson)()


// function logPerson() {
//     console.log(`Person: ${this.name}, Age: ${this.age}, Job: ${this.jobState}`);
// }

// console.log("Start");
// setTimeout(() => {
//     console.log("Set time out 2s");
// }, 2000);
// setTimeout(() => {
//     console.log("Set time out 0s");
// }, 0);
// console.log("End");