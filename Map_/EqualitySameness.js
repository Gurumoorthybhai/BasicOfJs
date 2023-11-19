// const str1 = "Hello";
// const str2 = new String("Hello");

// console.log(str1 === str2);

/*

const obj = {};
const key = prompt("Enter your key");
obj[key] = prompt("Enter your value");
alert(JSON.stringify(obj));

*/

// const obj1 = {};
// const obj2 = obj1;
// console.log(obj1 === obj2);

// obj1['a'] = 'name';

// console.log(obj1 === obj2);



// const getUpdateExpression = (item) => {
    //     const itemKeys = Object.keys(item);
    //     return `SET ${itemKeys
    //       .map((k, index) => `#field${index} = :value${index}`)
    //       .join(', ')}`;
    //   };
    
    const getExpressionAttributeNames = (item) => {
        const itemKeys = Object.keys(item);
        return itemKeys.reduce(
          (accumulator, k, index) => ({ ...accumulator, [`'#field${index}'`]: k }),
          {}
        );
      };



    // const getExpressionAttributeValues = (item) => {
    //     const itemKeys = Object.keys(item);
    //     return itemKeys.reduce(
    //         (accumulator, k, index) => ({
    //           ...accumulator,
    //           [`:value${index}`]: item[k] !== undefined ? item[k] : null
    //         }),
    //         {}
    //       )
    //   };

  console.log(getExpressionAttributeNames({a: 'name', b: 'age'}));