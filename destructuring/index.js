// let detail = {
//     name1: 'abcd',
//     address: { street: 'No.1 street', area: 'myp', test: [{val: 'par1'}, ,{val3: 'val3'}, {val4: 'val4'}]},
// }

// display(detail);

// let name, address;

// // { name, address } = detail;  //  Declaration or statement expected.

// // so

// ({name1, address} = detail);

// console.log(`${name1} ${address}`);

// let { address: {area}} = detail;

// console.log(address, area);

// let { address: {test}} = detail;

// console.log(test);

// function destructuring

// function display({ name1, address: { test: [{val: rename1}] }}) {
//     console.log(name1, rename1);  // abcd, par1
    
// }


// function display({ pincode= 641062, address: { test: [val, val2 = {test2: 'val2'}, ...restProp] } }) {
//     console.log(val2);  // 641062, par1, {test: 'val2'}
    
// }



// let user = {
//     name: "John",
//     years: 30
//   };
// let { name, years: age, isAdmin = false} = user;

//   console.log(`${name}, ${age}, ${isAdmin}`);


// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };

let salaries = {};
  console.log(topSalary(salaries));  
  // Pete
  // null
  function topSalary(salaries) {

    let maxSalary = 0;
    let maxSalariedName = null;

    for(let [name, salary] of Object.entries(salaries)) {

        if(maxSalary < salary) {
            maxSalary = salary;
            maxSalariedName = name;
        }
    }

    return maxSalariedName;
  }