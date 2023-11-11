// getter & setter

/*

const sampleObj = {
    a: 10,
    get b() {
        return this.a + 10;
    },
    set b(value) {
        this.a = value/2;
    }
};

console.log(sampleObj.a);

// sampleObj.a = 40;

sampleObj.b = 100;

console.log(sampleObj.a);

console.log(sampleObj.b);

*/

// getter & setter, can be added to an object after the object is created.

const obj = { a: 0 };

Object.defineProperties(obj, {
    b: {
        get() {
            return this.a + 10;
        }
    },
    c: {
        set(value) {
            this.a = value * 2;
        }
    }
});

console.log(obj.a);
obj.c = 10;
console.log(obj.a);
console.log(obj.b);

