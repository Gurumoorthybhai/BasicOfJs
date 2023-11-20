// context of this
// Generally we have 4 types of binding

1. Default Binging
2. Implicit Binding
3. Explict Binding
4. Constructor Call Binding

1. Default Binding

If a function housing 'this' in a standalone function, then 'this' inside function refers to global object.

2. Implicit Binding

A function can use a object as its context, only if object is bound to it on calling site.




call(), apply(), bind() are used to call functions with specified 'this' values.

Function.call(this: Function, thisarg, arg1.....argn);

thisArg -> to treat passed obj as a current obj.

in strict mode

Using call() to invoke a function without first argument thisArg its default to 'undefined'


in non-strict mode

thisArg refers to globalThis