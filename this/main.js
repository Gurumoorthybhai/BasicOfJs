// the value of 'this' inside a function is dynamic based on, how the function is invocated


// 1. Global Context

// invocate a function with out any context
// undefined in strict mode
// windows in non-strict mode

/*

'use strict';

function globalContext() {
    console.log('globalContext - ',this);              
}

globalContext();

// 2. Object Method

// invocate a method of object with object context 

const person = {
    property: 'I am an object property',
    ObjectMethod: function() {
        console.log(this.property);             // I am an object property
    }
}

person.ObjectMethod();

// 3. Constructor

function TestUser(name) {
this.property = name;
}

const instance = new TestUser('I am Constructor property');

console.log(`Constructor Invocation ${instance.property}`);


// 4. Explicitly setting the this context

function explicitProperty() {
    console.log('explicitProperty - ',this);
}

const context = {value: 'Explict property'}
explicitProperty.call(context)



// 5. Arrow Function

const arrowFunction = () => {
    console.log('Arrow - ',this);
    
}

const context1 = {value: 'Explict property for arrow function'}
arrowFunction.call({context1})

*/


// Diff scenario's arrow function vs regular function

// 1. lexical scope of 'this'

/*

"use strict"
function regularFunction() {
    setTimeout(function() {
        
        console.log(this);      // global object in non-strict mode, undefined in strict mode
        
    })
}


// arrow function does have its own this, refers to closest context
const arrowFunction = () => {
    setTimeout(() => {
            console.log(this);                  
            
    }, 0);
}


regularFunction();

arrowFunction();

*/

// 2. Object Method

/*

const person = {
    name: 'demoUser',
    regularFunction: function() {
        console.log(this.name);                 //  demoUser
    },

    arrowFunction: () => {
        console.log(this);                 //  Windows
    }
}

person.regularFunction();

person.arrowFunction();

const context = { name : 'explict context test'};

person.regularFunction.call(context);

*/

/*

// 3. Event Handling

const btn = document.getElementById('clickme');

btn.addEventListener('click', function() {
    console.log(` 1- ${this}`,this);     // this refer to current target element
});
// addEventListener

btn.addEventListener('click', () => {
    console.log("2 - ",this);          // this refer to surrounding context, windows
    
})

*/

// 4. Class

/*

class MyClass {
    constructor() {
        this.value = 10;
    }

    regularFunction() {
        console.log(this);
        
    }

    arrowFunction = () => {
        console.log(this);
        
    }
}

const instance = new MyClass();
instance.regularFunction();
instance.arrowFunction();
*/

// Outer & inner scope of this is diff in callback

/*

function regularAsyncOperation() {

    console.log('regularAsyncOperation Outer Scope', this);     // {value: 'Explicit Value'}
    
    setTimeout(function() {
        console.log('regularAsyncOperation Inner Scope', this);     // Window
    })

    // resolution

    setTimeout(function() {
        console.log('regularAsyncOperation Inner Scope', this);     // Window
    }).bind(this);

}
/*
function arrowAsyncOperation() {

    setTimeout(() => {
        console.log('Arrow Function',this);     // {value: 'Explicit Value'}
    })
}

const context = { value: 'Explicit Value'};

regularAsyncOperation.call(context);
// arrowAsyncOperation.call(context);              // {value: 'Explicit Value'}

*/

// bound function to bind 'this' in callback in setTimeout

// below are the solution for bind the 'this' context on callbacks

function regularBoundFunction() {

    const boundFunction = function() {
        console.log('regularAsyncOperation with bound function', this);     // {value: 'Explicit Value'}
    }.bind(this);
    
    setTimeout(function() {
        console.log('regularAsyncOperation Inner Scope', this);     // after binding 'this', it works
    }.bind(this))

    // resolution

    // console.log('regularAsyncOperation with bound function callback'); 

    setTimeout(boundFunction)

}


const context = { value: 'Explicit Value'};

regularBoundFunction.call(context);