// const map = new Map();

// map.set(1, 1-2);        
// map.set('1', 'welcome');
// map.set(true, false);
// // map.set(1.0, 1.0);
// map.set(-0.5, -0.5);
// map.set(0.5, '0.53');
// map.set(1/2, 100/20);    // value will be coverted to 0.5
// // map.set({}, 'welcome');


// const map1 = new Map();
// let key1 = 'key1'
// let key2 = 10/20
// map1.set(key1, 'value1')
// .set(key2, 'value2');


// const map2 = new Map(
//     [['key1', 1],
//     ['key2', 'value2'],
//     [1, 'number1']]
// );

// console.log(map2.keys());
// for(let k of map2) console.log(k);

// ['key1', 1]
// ['key2', 'value2']
// [1, 'number1']

// for(let k of map2.entries()) console.log(k);
// ['key1', 1]
// ['key2', 'value2']
// [1, 'number1']


// console.log(map1.keys());       // MapIterator { key1, 0.5}

// const john = { name: 'john', age: 20} ;
// map.set(john, `${john.name} - ${john.age}`);

// map.set(NaN, 10)
// map.set('', 20)
// map.set(undefined, 30)


// so all keys are same 

// map.set(NaN, 40)
// map.set(NaN+1, 'test')
// map.set(1/'str', 'test NaN key')

// it takes latest value - test NaN key

// regular object, converts key to string type
// but map stores it as same

// so both keys are different
// map.set(1, 'Hello');        
// map.set('1', 'welcome');

// console.log(map.get(1));    // welcome 1
// console.log(map.get(1.0));  // welcome 1


// console.log(map.get(1));        // override by latest value 1
// console.log(map.get('1'));      // welcome
// console.log(map.get(true));     // false
// console.log(map.get(1.0));      // 1
// console.log(map.get({}));       // undefined
// console.log(map.get(0.5));      // 0.5 not 0.53
// console.log(map.get(-0.5));     // -0.5
// console.log(map.get(0.5));      // 0.5


// // here both 1/2, 0.5 numberic keys are same


// console.log(map.get(john));  // john - 20

// console.log(map.size);
// console.log(map.has(john));

 
// map['name'] = 'siva'        // create as a separate object

// console.log(map.has('name'));  // false

// console.log(map.get(NaN));              // 40
// console.log(map.get(''));               // 20
// console.log(map.get(undefined));        // 30
// console.log(map.get(NaN+1));        // test
// console.log(map.get(NaN));        // test
// console.log(map.get(1/'str'));        // test

// console.log(map.size);         
// console.log(map.has({}));


// map.delete(0.5)
// console.log(map.size);

// for(let key of Object.entries(map)) {
//     console.log(key);
    
// }

// ======================================================


// console.log(map1.keys());       // MapIterator { key1, 0.5}
// console.log(map1.values());       // MapIterator { value1, value2}

// for(let key of map1.entries())
// console.log(key[1]);    // value1, value2


// console.log(Object.entries(map1));


////////////////////////////////////////////////////////////////////////////////////////////////////

// convert object to map

// const obj = {
//     name: 'Abcd',
//     age:10,
//     detail: {city: 'cbe', state: 'tn'}
// };

// for(let k of Object.entries(obj))
// console.log(k);
// [
//     ['name', 'Abcd'],
//     ['age', 10],
//     ['detail', {city: 'cbe', state: 'tn'}],
// ]

// const map1 = new Map(Object.entries(obj));

// for (let key of map1.entries()) {
//     console.log(key);
// }
// [
//     ['name', 'Abcd'],
//     ['age', 10],
//     ['detail', {city: 'cbe', state: 'tn'}],
// ]




// convert map to object



// const map2 = new Map(
//     [['key1', 1],
//     ['key2', 'value2'],
//     [1, 'number1']]
// );


// const obj = Object.fromEntries(map2);

// console.log(obj);

// {
//     1: 'number1',
//     key1: 1,
//     key2: 'value2'
// }

// for(k of Object.fromEntries(map2))
// console.log(k);  Object.fromEntries is not a function or its return value is not iterable


// const map2 = new Map(
//         [['key1', 1],
//         ['key2', 'value2'],
//         [1, 'number1']]
    // );


// so we need 3rd params to use any map related operation
// if we dont pass 3rd params map  main.js:191 Uncaught ReferenceError: map is not defined

    // map2.forEach((value, key, map) => {
    //     console.log(`${key} - ${value}`);
        
    //     if(key === 1) map.set('key3', value+'test');
    //     map.set('key3', value+'test1');
    // });

    // console.log(map2);
    
////////////////////////////////////////////////////////////////////////////////////////////////////

// set

// const visitors = new Set();

// const p1 = { name: 'A'};
// const p2 = { name: 'B'};
// const p3 = { name: 'c'};


// visitors.add(p1);
// visitors.add(p2);
// visitors.add(p3);
// visitors.add(p2);
// visitors.add(p1);

// visitors.delete(p1);

// for(let k of visitors)
// console.log(k);

// {name: 'B'},
// {name: 'C'}

// set holds unique values only 
// console.log(visitors.size); // 3


// for(let k of visitors)
// console.log(k);

// {
//     { name: 'A'},
//     { name: 'B'},
//     { name: 'c'}
// }

// Tasks


// FIlter unique array members
// function unique(arr) {
//     /* your code */


//     return [...new Set(arr)];
//   }
  
//   let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];
  
//   alert( unique(values) );


// Remove Anagrams


// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];



// function aclean() {
//     const createKeyValueMap = new Map();

//     for(let s of arr) {

//        let sortedKey  = s.toLowerCase().split('').sort().join('');
//         createKeyValueMap.set(sortedKey, s);
//     }
//     return Array.from(createKeyValueMap.values());
// }

// alert( aclean(arr) );  // PAN,hectares,era


// Iterable keys

/*

let map = new Map();

map.set('name', 'Abcd');

let keys = Array.from(map.keys()); // it returns a map iterator, we need to convert into array

keys.push('age');

console.log(keys);  // ['name', 'age']

*/

////////////////////////////////////////////////////////////////////////////////////////////////////

// Weak Map


// let obj = { name: 'Abcd'};

// const map = new Map();


// map.set(obj, 'test1');

// obj = null;

// // console.log(map.get({ name: 'Abcd'}));  // undefined
// console.log(map.keys());


// let john = { name: "John" };

// let array = [ john ];

// john = null;

// console.log(array[0]);    // { name: "John" }; still it is refereable.



// let weakMap = new WeakMap();

// let map = new Map();

// let obj = { name: 'Abcd'};

// weakMap.set(obj, 'test weakmap');

// map.set(obj, 'map variable');

// obj = null;

// for(let k of map.entries())
// console.log(k);
// console.log(weakMap.has(obj));



// const map = new Map();

// function counter(key) {

//     if(!map.has(key)) {
//         const count = map.get(key) || 0;
//         map.set(key, count+1);
//         return count;
//     }

//     return map.get(key);
// };

// let user = { name: 'Abc' };

// console.log(counter(user));
// console.log(counter(user));

// user = null;
// console.log(map.size);  // 1  even after the key reference, is garbage collected, but its memory is used.


const weakMap = new WeakMap();

function counter(key) {

    if(!weakMap.has(key)) {
        const count = weakMap.get(key) || 0;
        weakMap.set(key, count+1);
        return count;
    }

    return weakMap.get(key);
};

let user = { name: 'Abc' };

console.log(counter(user));
console.log(counter(user));

user = null;
// console.log(weakMap.size);   by the way we dont have size method, to check, but it will be '0', will become '0'. It's garbage collected & memory is released.

