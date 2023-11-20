// polyfill for Array.prototype.includes()



// if(!Array.prototype.includess) {
// Array.prototype.includess = function(searchElement) {
// for (var i = 0 ; i < this.length ; i++ ) {
//     if (this[i] === searchElement) {
//         return true;
//     }
// }
// return false;
// };
// }

// let arr = [1,2,3,4,5];
// console.log(arr.includess(10));


// polyfill for the foreach

Object.defineProperty(Array.prototype, 'forEach', {
    value: function(callback) {
        const arr = [];

        
    }
})