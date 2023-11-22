// https://www.freecodecamp.org/news/understand-call-apply-and-bind-in-javascript-with-examples/
// context of this


// function display() {
//     console.log(this.age+ ' is calling');
// }
// const age = 'Guru';

// display();



/*

// Implicit Binding

function alert() {
    console.log(this.age+ ' years old.');

}

const obj = {
    age: 27,
    alert:alert,
    details: {
        age: 25,
        name: 'ABC',
        alert:alert                         // property function reference on the object
    }
}

obj.alert();                // 27 years old.
obj.details.alert();        // 25 years old.

*/

// without putting property function reference on the object, with call(), apply()

// Explicit Binding

// to explicitly bind a function call to a context, need to invoke with call()

// invoke a function with call() & pass a context obj as parameters

/*

function alert() {
    console.log(this.name,'-', this.age);
}

const context = {
    name: 'Guru M',
    age: 25
}

alert.call(context);

*/

// Hard Binding in javascript involves explicitly setting the 'this' value for a function & ensuring that it can't be overridden.

/*

function alert() {
    console.log(this.name,'-', this.age);
}

const context = {
    name: 'Guru M',
    age: 25
}

alert.call(context);


const context1 = {
    name: 'Naveen M',
    age: 26
};

alert.call(context1);

*/

// different o/p


/*

function alert() {
    console.log(this.name,'-', this.age);
}

const context = {
    name: 'Guru M',
    age: 25
}

const bar = function() {
    alert.call(context);
}

bar();

const context1 = {
    name: 'Naveen M',
    age: 26
};

bar.call(context1);

// same o/p for both context, as it sets explicitly context

*/

/*
function alert() {
    console.log(this.name,'-', this.age);
}

const context = {
    name: 'Guru M',
    age: 25
}

const bar = alert.bind(context);

bar();

const context1 = {
    name: 'Naveen M',
    age: 26
};

bar.call(context1);

// call functions with specific 'this' reference

// function greet(name) {
//     console.log(`Hello ${name}, this is ${this.myName}`);
    
// }

// const context = { myName: 'Guru' };

// greet.call(context, 'Naveen');


// const A = {
//     fName: 'Guru',
//     lName: 'bhai',
//     getName: function() {
//         return `${this.fName} - ${this.lName}`
//     }
// }

// let context = { fName: 'Naveen', lName: 'M'};

// A.call(getName, );


*/


// Role of this

// by default 'this' referes to globalThis. Car constructure function is a standadlone function, so to set explicit context of this, call() method helps to set the current context of 2 objects obj1, obj2

// call method used as a borrow functionality from Car constructor, with 'this', we passed 2 different context setBrand, setPrice. Consider we called constructor function to add additional property to the setBrand, setPrice methods

/*
function Car(fuelType, model) {
this.fuelType = fuelType;
this.model = model;
}

function setBrand(brand) {
Car.call(this, 'petrol', 'Polo');
this.brand = brand;
console.log(`setModel - ${JSON.stringify(this)}`);

}

function setPrice(price) {
Car.call(this, 'diesel', 'XL6');
this.price = price;
console.log(`setPrice - ${JSON.stringify(this)}`);

}

const obj1 = new setBrand('Volkswagen');
const obj2 = new setPrice('1000000');
*/

// const newEntity = (arg) => console.log(arg);

// function MountEntity() {
//     this.entity = newEntity;

//     console.log(`Entity ${this.entity} is mounted on ${JSON.stringify(this)}`);
    
// }

// MountEntity.call();


/*
function calculateTotal(num1, num2) {
    const total = num1 + num2;
    console.log(`Total is ${total}`);
    
}

calculateTotal.call(null, 10, 20);  // we need to set first argument value as 'null'
*/

// ================================ apply ================================ 

// apply() method is similar as call,but passing arguments type is array literal or new array object or arguments

/*
function Car(fuelType, model) {
    this.fuelType = fuelType;
    this.model = model;
}

function setBrand(brand) {
    Car.apply(this, ['petrol', 'Polo']);

    this.brand = brand;
}

function setPrice(price) {
    Car.apply(this, ['diesel', 'XL6']);

    this.price = price;
}

const obj1 = new setBrand('Volkswagen');
const obj2 = new setPrice(1000000);

*/

/*

function addUp() {
const arg = Array.from(arguments);              // used Array.from bcz arguments are object like keyed-arrays
x = arg.reduce((prev, curr) => prev + curr,0);         // storing the result in object as 'x', as object-oriented design, we use this to   access the objects property, it prevents 

// -> it prevents global pollution by creating in current obj
// -> encapsulation the variable 'x' with object & code readability 
console.log("this.x = ", this.x);

}

function calculateTotal() {
    const obj = {
        arr: [1,2,3,4,5]
    }
    addUp.apply(obj, obj.arr)
    console.log(obj);
    
}

calculateTotal();
*/

// ================================ bind ================================ 

// bind() function creates a copy of the context to the 'this'


// function person(age) {
//     console.log(`My name is ${this.name} & age is ${age}`);
// }


// const context = { name: 'Gurubhai'};

// const greetPerson = person.bind(context, 25);
// greetPerson();

// usecase of bind()

// 1. Class based component, reference to methods in constrctor
// 2. Dynamic function creation
/*

const person = {
    firstName: 'Guru',
    sayHello: function() {

         // Person Name is undefined, we received received undefined, bcz while assigning the sayHello method to another variable, the context of the this with the person object is lossed, this inside the function refers to global scope or undefined in strict mode

        console.log(`Person Name is ${this.firstName}`);  
    }
}

const sayHello = person.sayHello;
sayHello();


// to fix the issue, we have 2 approches

// 1. use bind method
// 2. use arrow function

*/

// 1. use bind method

// const person = {
//     firstName: 'Guru',
//     sayHello: function() {
//         console.log(`Person Name is ${this.firstName}`);  
//     }
// }

// // explicitily set the value of 'this' inside the sayHello function with person object

// const sayHello = person.sayHello.bind(person);
// sayHello();

// 2. use arrow function

// const person = {
//         firstName: 'Guru',
//         sayHello: function() {
//             console.log(`Person Name is ${this.firstName}`);  
//         }
//     }

// // const sayHello = () => person.sayHello();
// const sayHello = function () {
//     return person.sayHello();
// }
// sayHello();

// Practice on create map polyfill

// arr.func() 
// what does map function does?
// it applys the received callback function on all the elements
// it return as arr

// let arr = [1,2,3,4,5];

// const callback = (x => x * 2);

// function add(x) {
// return x*2;
// }

/*

function newMap(func) {
    const returnArr  = [];
    const arrLen = this.length;
    for (let i = 0; i < arrLen; i++) {
        returnArr.push(func.call(null, this[i]))        // if the callback need this context, then pass this as arg func.call(this, this[i])
    }
    return returnArr
}

const result = newMap.call(arr, add);
console.log(result);

*/

// The current implementation doesn't handles to check the argument of function is passed

/*

function newMap(func) {
    if( typeof func != 'function')
    throw new Error('A valid callback function must be provided');

    const returnArr = [];
    const arrLen = this.length;

    for (let i=0; i<arrLen; i++) {
        returnArr.push(func.call(this, this[i]))
    }
    return returnArr;  
}


const arr1 = [1,2,3,4,5];

const callback = (x => x*2);

const res = newMap.call(arr1, callback);
console.log(res);

*/


// Polyfill for forEach

// const arr = [1,2,3,4,5];

// const arr1 = [a1,a2,a3,a4,5];

// applying forEach on array variable

/* 
// forEach Signature

arr.forEach((value, index, arr) => {

}, thisArg)

*/


// sample 1

// arr.forEach((val, index, array) => {
//     console.log(`The element index: ${index} - value: ${val}`);
// })

/*
above o/p

The element index: 0 - value: 1
The element index: 1 - value: 2
The element index: 2 - value: 3
The element index: 3 - value: 4
The element index: 4 - value: 5

*/

// sample 2

/*

const callBack = (val, index) => console.log(`index - ${index} - value - ${val}`);

[10,20,30,40,50].forEach(callBack);

*/

/*
above o/p 

index - 0 - value - 10
main.js:436 index - 1 - value - 20
main.js:436 index - 2 - value - 30
main.js:436 index - 3 - value - 40
main.js:436 index - 4 - value - 50

*/


// sample 2
// thisArg is set to sumObj, to accumulate sum, 
// Only function expressions will have its own this binding

/*

const sumObj = { sum : 0 };
arr.forEach(
    function(val, index, array){

    this.sum += val; 
    // console.log(this);
    
    console.log(`Element index: ${index}: ${val}, sum is ${this.sum}`);
    
}, sumObj)

*/

/*
above o/p 

Element index: 0: 1, sum is 1
main.js:466 Element index: 1: 2, sum is 3
main.js:466 Element index: 2: 3, sum is 6
main.js:466 Element index: 3: 4, sum is 10
main.js:466 Element index: 4: 5, sum is 15

*/


// sample 3 with arrow function
// Only function expressions will have its own this binding

// const sumObj = { sum : 0 };

// arr.forEach(
//     (val, index, array) => {

//     // this.sum += val; 
//     console.log(this);      // windows
    
//     console.log(`Element index: ${index}: ${val}, sum is ${this.sum}`);
    
// })

// if we need to set explict 'this',

/*
// it works

arr.forEach(
    (val, index) => 
        (function(){
        this.sum += val;
        console.log(`Element index: ${index}: ${val}, sum is ${this.sum}`);
        
    }).call(sumObj)
)

*/