// https://www.freecodecamp.org/news/understand-call-apply-and-bind-in-javascript-with-examples/
// context of this

// write polyfill for forEach, map, filter, find, call, apply, bind, fill, splice, slice

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

// polyfill forEach

// newforEach.call(arr,callback);
// const callback = () => {
// console.log();

// }

// function newforEach(func) {

//     const returnArr = [];
//     const arrLen = this.length;

//     for(let i = 0; i < arrLen; i++) {
//         returnArr.push(func.call(this, this[i]))
//     }

// }

// newforEach.call()

/*

if (!Array.prototype.customForEach) {

Array.prototype.customForEach = function(func, thisArg) {

    if (typeof func !== 'function') {
        throw new TypeError(`${func} is not a function`)
    }

    // const returnArr = [];
    const arrLen = this.length;

    for(let i = 0; i < arrLen; i++) {
    func.call(thisArg, this[i], i, this);
    }
// return returnArr;
}
}
const arr = [1, 2, 3, 4, 5];


const res = arr.customForEach((val, index) => console.log(`index ${index} - value ${val}`));
// const res = arr.customForEach((val, index) =>  val > 3 ? val : -1);

console.log(res);

// console.log(arr.forEach(val => val > 3 ? val : -1));
*/

// with use of thisArg

/*

if (!Array.prototype.customForEach) {

    Array.prototype.customForEach = function(func, thisArg) {

        if(typeof func !== 'function') {
            throw new TypeError('Callback function must be a function');
        }

        const arrLen = this.length;

        for (let i = 0; i < arrLen; i++) {
            func.call(thisArg, this[i], i, this)
        }
    }
}

const callback = function(value, index) {
// console.log(this);

    this.sum += value;
    console.log(`Index - ${index}, value - ${value}, sum - ${this.sum}`);
    
}

const arr = [ 1,2,3,4,5];
const sumObj = { sum : 0 };

arr.customForEach(callback, sumObj);

// arr.customForEach(function(value, index) {
//     // console.log(this);
    
//         this.sum += value;
//         console.log(`Index - ${index}, value - ${value}, sum - ${this.sum}`);
        
//     }, sumObj);

*/

//1. What is the difference between using forEach for side effects and using it for a functional approach?

// side effects, modify external variable effect outside the callback or state or logging


// const arr = [1,2,3,4,5];

// let sum = 0;
// arr.forEach(val => sum += val);
// console.log(sum);           // 15


// functional approach, as per functional approach, a new array value is created inside the callback other than creating a side effects

/*

let doubleArr = [];
arr.forEach(val => doubleArr.push(val * 2));
console.log(doubleArr);           // [1, 4, 6, 8, 10]

*/

// How will u handle error in polyfill

// to avoid overridding on existing method or pollution

/*

if(!Array.prototype.forEachPolyfill) {

    Array.prototype.forEachPolyfill = function(callback, thisArg) {

        // 2. Check callback function type & thisArg type

        if (typeof callback !== 'function') {
            throw new TypeError(callback +'is not a function type')
        }

        // console.log(typeof thisArg);
        
        // 3. Check thisArg is object or null
        if(thisArg !== undefined && thisArg !== null && typeof thisArg !== 'object') {
            throw new TypeError('thisArg mush be a object type or null value')
        }
        console.log(this);
        
        const array = Object(this);
        console.log(array);
        
        const arrLen = array.length;
        
        for (let i = 0; i < arrLen; i++) {
            if (i in array) {
                try {
                    callback.call(thisArg, array[i], i, array);
                }
                catch(err) {
                    // handle error in callback
                    console.log('Error in callback', err);
                    
                }
            }
        }

    }
}

let arr = [1,2,34,5];

const sumObj = {sum:0};
arr.forEachPolyfill((val) => {
    // this = 20;
    console.log(this);      // windows bcz of arrow function
    
}, sumObj)

*/

// why to use const arr = Object(this);
// 1. to provide consisitency value of this
// 2. To avoid potential error

// function value() {
//     console.log(typeof this);
//     console.log(this.toFixed(2));
// }

// value.call(10);

// function exampleFunction() {
//     console.log(typeof this); // "number"
//     console.log(this.toFixed(2)); // Error: this.toFixed is not a function
// }

// exampleFunction.call(42); // Calling with a primitive (number)


// write pilyfill for find

// find singnature

// arr.find(callback, thisArg)

// return new array
// find() method returns the first matching value that satisifes the condition,
// it iterates, until the condition it met, if reached end of the its lenght, undefined is returned


/* const arr = [1,2,3,4,5];

const res = arr.find(val => val > 3);           
console.log(res);    */                // 4 , first matching value




// const user = [
//     { name: 'a', age: 10},
//     { name: 'b', age: 20},
//     { name: 'c', age: 30},
// ]

// const thisContexnt = { search: 20};

// ex 1:
// const res1 = user.find(obj => obj.age === 20);
// console.log(res1);                  // { name: 'b', age: 20}


// ex 2:  thisArg

/*

const res1 = user.find(obj => obj.age === thisContexnt.search, thisContexnt);
console.log(res1);                  // { name: 'b', age: 20}
*/

// ex 3:

/*

const searchContext = {
    target: 20,
    findMethod: function(element) {
        return element.age === this.target;
    }
}
const resWithContext = user.find(searchContext.findMethod, searchContext);

console.log(resWithContext);   // { name: 'b', age: 20},

*/


// ex 4

// using arrow function & destrcturing

// const res = user.find(({age}) =>  age === 10);
// console.log(res);           // {name: 'a', age: 10}



// ex 5, with arrow function, 'this' pts to global

/*

const searchContext = {
    target: 20,
    findMethod: (element) => {
        return element.age === this.target;
    }
}

const bindFunc = searchContext.findMethod.bind(user);
const resWithContext = user.find(bindFunc);

console.log(resWithContext);            // undefined
*/

// ex 6  sparse array (without a value)

// let sparseArr = [1,2,3, , , 6];

// sparseArr.find((ele, index, array) => {
//     console.log(`index-${index}, ele-${ele}`);
// })

// index-0, ele-1
// main.js:799 index-1, ele-2
// main.js:799 index-2, ele-3
// main.js:799 index-3, ele-undefined
// main.js:799 index-4, ele-undefined
// main.js:799 index-5, ele-6

// ex 7

// callbackFn will not visit any elements added beyond the array's initial length when the call to find() began.
// map, find, filer all methods look on arrays length as it's initial not while operation on callback
// let arr = [1,2,3,4,5];

// const res = arr.find((ele, index, array) => {
//     array.push(arr[arr.length-1]+index+1)
//     return ele > 5;
// })
// console.log(res);    // undefined bcz, new values has been added on callback but they are not consider


// If an existing, yet-unvisited element of the array is changed by callbackFn, its value passed to the callbackFn will be the value at the time that element gets visited.

// const res1 = arr.find((ele, index, array) => {

//         array[0] = 6;
//         return ele > 3;
//     })
//     console.log(res1);   // 4, it considers the values at the time of call, & not updated values

// calling find on non-array-like object

/*

const nonArr = {
    length: 5,
    "-1": -10,
    1: 10,
    0: 20,
    2: 40,
    1: 30
};
*/

// Array.prototype.find.call(nonArr, (val,index) => console.log(index+" "+val));

// It reads only positive index values, in ascending order
// 0 20
// 1 30
// 2 40
// 3 undefined
// 4 undefined

// Real-Time usecase

// Can you provide an example use case where the find method is more suitable than other array methods?

// User Authentication
// Imagine you have an array of user objects representing users in your web application. Each user object has an id property, and you want to find a specific user based on their id. In this scenario, the find method is more suitable than other array methods.

//1. Why find is Suitable:

// The find method is ideal in this scenario because it stops iterating through the array as soon as it finds the first user with the specified id. This is more efficient than using methods like filter or forEach that would continue to iterate through the entire array, even after finding the desired user.

//2. Potential Alternatives:

// If you used filter, you would get an array of users with the specified id, and you'd need to check if the array is empty or not. This is less efficient for this specific use case.
// If you used forEach, you would need additional logic to break out of the loop once the user is found.


// Real-World Application:

// How would you handle asynchronous operations inside the callback function passed to the find method?
// find is does not suport async promise call, bcz for first, promise is truthy value


/*
const userId = [10, 2, 3, 4, 5];

const userDetails = [
    { id: 1, name: '1-abcd' },
    { id: 2, name: '2-abcd' },
    { id: 3, name: '3-abcd' },
    { id: 4, name: '4-abcd' },
];

const fetchUserDetails = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const userDetail = userDetails.find(user => userId === user.id);
                if (userDetail) {
                    resolve(userDetail);
                } else {
                    reject(`User with ID ${userId} not found`);
                }
            } catch (err) {
                reject(err);
            }
        }, 0);
    });
};

const findUser = async () => {
    const findUserId = 4;

    try {
        const userFound =  userId.find(async (id) => {
            try {
                const val = await fetchUserDetails(id);
                return val.id === id;
            } catch (err) {
                // Handle rejection if needed
                console.error(`Error in fetching details for user with ID ${id}: ${err}`);
                return false; // Returning false to indicate user not found
            }
        });

        console.log("Do't wait");
        
        // Check for rejected promises (user not found)
        if (userFound === false) {
            console.log(`Unable to find the user`);
        } else {
            console.log(`The Username is ${userFound.name}`);
        }
    } catch (err) {
        console.error(`Error in getting user: ${err}`);
    }
};

findUser();
*/


/*

function returnsPromise() {
    return new Promise(resolve => resolve("done"));
  }
  
  async function findThing() {
    const promiseReturn = await returnsPromise();
    return promiseReturn;
  }
  
  async function run() {
    const arr = [1, 2];
    const found = await arr.find(async thing => {
      const ret = await findThing();
      console.log("runs once", thing);
      return false;
    });
    console.log("doesn't wait");
  }
  
  run();

  */

  /*

  const arr = [ 0, NaN, null, undefined, '', false]; // false value

  console.log(arr.find(val => val));        // undefined

  */

// Polyfill for find() method


if (!Array.prototype.polyFillFind) {

    Array.prototype.polyFillFind = function(callback, thisArg){


        if (typeof callback !== 'function') {
            throw new TypeError(callback+' should be a function');
        }

        if(thisArg === null || thisArg === undefined) {
            throw new TypeError(' find() method is called on null or undefined')
        }

        const array = Object(this);
        const arrayLen = array.length;
        
        let returnVal = undefined;
        for(let i=0; i< arrayLen; i++) {
            if (i in array) {
                if(callback.call(thisArg, array[i], i, array)) {
                    return returnVal = array[i];
                }
            }
        }

        return returnVal;
    }
}

const arr = [1,2,3,4,5,6];
const thisArg = 5;

const res = arr.polyFillFind((val, index, array) => {
    array[array.length] =  array[array.length-1]+1;
    // console.log(index);    it runs till the initial arr length 6

    return val > thisArg;
    
}, thisArg);

// passing null or undefined for thisArg

console.log(res);

// const arr = [1,2,3,4,5,6];

// console.log(Array.prototype.find.call(null, val => val > 2));   main.js:1011 Uncaught TypeError: Array.prototype.find called on null or undefined
