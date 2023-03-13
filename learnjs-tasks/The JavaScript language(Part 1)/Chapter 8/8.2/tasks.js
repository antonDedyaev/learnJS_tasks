// Task 1: true, false, true, undefined

// Task 2: Такой вариант сработает, если prototype не менялся
function SomeObject (prop) {
    this.prop = prop;
}
let obj1 = new SomeObject(someProp);
let obj2 = new obj1.constructor(anotherProp);

// Если сделать вот так
SomeObject.prototype = {};

// то не сработает.
