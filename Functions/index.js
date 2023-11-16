// regular function

// function add(a, b) {
//     console.log(arguments);
//     return arguments[0] + arguments[1];
// }
// console.log(add(1, 2)); // 3


// use strict mode

// 'use strict';
// function add(a, b) {
//     console.log(arguments);
//     return arguments[0] + arguments[1];


// }
// console.log(add(1, 2)); //


// arrow function

/*
const add = (a, b) => {
    console.log(arguments);   // ReferenceError: arguments is not defined
    return a + b;
};

console.log(add(1, 2));  

*/

// Async function

// async function add(a, b) {
//     console.log(arguments); // [1, 2 , etc.,]
//     return a + b;
// }
// console.log(add(1, 2)); // Promise { 3 }

/*

const add = async (a, b) => {
    console.log(arguments); // ReferenceError: arguments is not defined
    return a + b;
}
console.log(add(1, 2)); // Promise { 3 }

*/

// To resolve all the issue we use rest parameter in function

/*

const add = (...arguments) => {
    console.log(arguments); // [1, 2 , etc.,]
    return arguments[0] + arguments[1];
};
console.log(add(1, 2)); // 3


*/


/*
const add = async (...arguments) => {
    console.log(arguments); // [1, 2 , etc.,]
    return await arguments[0] + arguments[1];
}

console.log(add(1, 2)); // Promise { 3 }
*/

// ==============================================  Constructor Function ======================================================

/*

const add = Function('a','b','c','return a + b');
const add1 = new Function('a','b','c','return a + b'); // new keyword is optional

console.log(add(1,2,3)); // 3

// console.log((add.length)); // 3 no.of.parameters
*/

// ==============================================  Function Length ======================================================
/*

function add(a, b, c) {};
function add1(a,b){};

console.log(add.length); // 3
console.log(add1.length); //

*/

// Functions constructor is itself a function object. Its length is 1. It has only one parameter, which is the string containing the function body.
// rest parameter is not counted in the length property

// console.log( Function.length ); // 1

// console.log( (() => {}).length ); // 0
// console.log( ((a,b) => {}).length );  // 2
// console.log( ((a,b, ...arg) => {}).length );  // 2  rest parameter is not counted in the length property
// console.log( ((...arg) => {}).length );  // 0  rest parameter is not counted in the length property

// console.log( ((a, d ,b=10, c) => {}).length ); // 2   before default parameter are considered for length property 


// ==============================================  Function name ======================================================

/*
function add(a, b) {};
console.log(add.name); // add

const add1 = function(a, b) {};

console.log(add1.name); // add1

const add2 = function add3(a, b) {};
console.log(add2.name); // add3

*/

/* 
// function.name property is a read-only property. It can not be changed.

// default exported function name is default

// file1.js

export default function() {};

// file2.js

import add from './file1.js';

console.log(add.name); // default
*/

/*

console.log( (()=>{}).name); // empty string 
console.log( new Function().name); // anonymous

*/

// Telling the function name for constructor function

/*
function Foo() {};

const obj = new Foo();
console.log(obj.name); // Foo

// static method name property
*/

/*

class Foo1 {
    static name() { return 'demo name'};
};

const obj1 = new Foo1();
console.log(Foo1.name); // ƒ name() { return 'demo name'}
console.log(obj1.name); // undefined

*/

// while compressors & minifiers are used, function name is removed


// const boxes = [
//    { name: 'box1', getName() { return this.name }},
//    { name: 'box2', getName() { return this.name }},
//    { name: 'box3', getName() { return this.name }}
// ];

// the above code looks like redundant, to fix this will create common method (prototype method)

/*

const boxPrototype = {
    getValue() {
        return this.name;
    },
};

const boxes = [
    { name: 'box1', __proto__: boxPrototype},
    { name: 'box2', __proto__: boxPrototype},
    { name: 'box3', __proto__: boxPrototype},
]

for(let box of boxes)
console.log(box.getValue());

*/

// with constructor 

/*

function Box(value) {
    this.value = value;
}

Box.prototype.getValue = function() {
return this.value;
}

const box1 = new Box('box1');
const box2 = new Box('box2');
const box3 = new Box('box3');

console.log(box1.getValue());
console.log(box2.getValue());
console.log(box3.getValue());

// console.log(Box.prototype.constructor === box1.prototype.constructor);

*/
// function Box() {
//     return this.name;
// }

// const boxes = [
//     { name:'box1', getValue() }
// ]

// let arr = [];
// arr.push(1);
// arr.push(2);
// arr.push(3);

// let arr1 = [];
// arr1.push(-1)
// arr1.concat(...arr);
// console.log(arr);

/*
function greet() {
    return `${this.animal} sleeps duration of ${this.sleepDuration}`
}

const obj = {
    animal: 'cat',
    sleepDuration: 'between 12 to 16 hours.'
}

console.log(greet.call()); // when we call empty, this points to global this, undefined sleeps duration of undefined
console.log(greet.call(obj)); // cat sleeps duration of between 12 to 16 hours.

*/

/*

// global this declaration

globalThis.animal = 'Dog';
globalThis.sleepDuration = 'between 6 to 8 hours.';

function greet() {
    return `${this.animal} sleeps duration of ${this.sleepDuration}`
}

const obj = {
    animal: 'cat',
    sleepDuration: 'between 12 to 16 hours.'
}

console.log(greet.call()); // when we call empty, this points to global this, index.js:272 Dog sleeps duration of between 6 to 8 hours.
console.log(greet.call(obj)); // cat sleeps duration of between 12 to 16 hours.

*/

// in strict mode, its undefine even though globalThis is defined
// global this declaration
/*


"use strict";

globalThis.animal = 'Dog';
globalThis.sleepDuration = 'between 6 to 8 hours.';

function greet() {
    return `${this.animal} sleeps duration of ${this.sleepDuration}`
}

const obj = {
    animal: 'cat',
    sleepDuration: 'between 12 to 16 hours.'
}

console.log(greet.call()); // when we call empty, 
/*

index.js:288 Uncaught TypeError: Cannot read properties of undefined (reading 'animal')
    at greet (index.js:288:20)
    at index.js:296:19
greet @ index.js:288
(anonymous) @ index.js:296
*/


// console.log(greet.call(obj)); // cat sleeps duration of between 12 to 16 hours.

// we use 'call' specifically to use 'this'

/*
function add(a, b) {
    return `${a} + ${b} = ${a+b}`;
};

// console.log(add.call(1,2));  // undefined + undefined
console.log(add.call(null, 1,2));  // 1 + 2 = 3;

*/

/*

const person1 = {
    name: 'guru',
    greet() {
        console.log(`Hello ${this.name}, welcome you`);
    },
};

// person1.greet();

const person2 = {
    name: 'naveen'
};

person1.greet.call(person2);
*/

// using call() to transform functions into methods by setting a custom 'this' value

/*

const person  = { name: 'guru'};
const person1  = { name: 'naveen'};

function greet() {
    console.log(`Hello ${this.name}, welcoming you`);
};

// greet.call(person);
// greet.call(person1);

// same output as above
const greetPerson = greet.bind(person);
const greetPerson1 = greet.bind(person1);

greetPerson();
greetPerson1();

*/

/*

let firstName = 'gurubhai'
let lastName = 'm'

function FullName(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

const person1 = new FullName('guru','M');
const person2 = FullName('naveen','M');

console.log(person1); // FullName: { firstName: 'guru', lastName: 'M'}
console.log(person2);  // undefined bcz we didnt instantiated the constructor with 'new' keyword
*/

// Constructor function pts to the global score & its own local score & not the score where it got defined

/*

let a = 20;
function callConstructor() {
    let a = 10;
    return new Function('a=30','return a'); // 30
    // return new Function('return a'); // 20
}

const call1 = callConstructor();
console.log(call1()); // 30

*/

// ==============================================  Function.toString() ======================================================

/*
function greet() {
    console.log("greet");
    
};

console.log(greet.toString()); // function greet() { console.log("greet"); }


const greet1 = function() {
    console.log("greet 1");
    
};

console.log(greet1.toString()); // function() { console.log("greet 1")  ; }

*/

// const greet2 = () => {
//     console.log("greet 2");
    
// }

// console.log(greet2.toString()); // () => { console.log("greet 2"); }




// function declaration vs function expression 



// const age = prompt(`What's your age?`, 18);

// {
// if(age > 18)
// {
//     function display() {
//     console.log('Greetings');
//     return;
//     }
//     display();
// }
// function display() {
//     console.log('Hello 1'); 
//     return;
//     }
   
//     display();

// }


// display();
// const welcome = (age > 18) ? function() {
//     console.log('Hello'); }
//      : function() { 
//         console.log('Greetings');
//      }

// welcome();


// "use strict";

// let age = prompt("What is your age?", 18);

// // conditionally declare a function
// if (age < 18) {

//   function welcome() {
//     alert("Hello!");
//   }

// } else {

//   function welcome() {
//     alert("Greetings!");
//   }

// }

// // ...use it later
// welcome(); // in strict mode Error: welcome is not defined

// let age = prompt("What is your age?", 18);

// if (age < 18) {

//       let welcome = function() {
//         alert("Hello!");
//       }
    
//     } else {
    
//         let welcome = function() {
//         alert("Greetings!");
//       }

//       function test() {
//         alert("Greetings!");
//       }
    
//     }
    
// When to choose Function Declaration versus Function Expression?


// Function Declaration

// 1. function declaration gives the flexibility to invoke function before declaration
// 2. makes readbility of the function easy based on name provided

// Function Expression

// 1. Helps in assign based on condition 

// const welcome = (age < 18) ? function() {console.log('Hello')} : function() {console.log('Greeting')}

// 2. Encapsulation:


const counter = () => {

    let count = 0;

    const increment = function() {
        count++;
    };

    const returnCountValue = () => count;

    return {
        increment,
        returnCountValue
    }
};

const getResult = counter();
getResult.increment();   
console.log(getResult.returnCountValue());
