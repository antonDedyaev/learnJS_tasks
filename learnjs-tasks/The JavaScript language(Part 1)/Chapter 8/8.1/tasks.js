// Task 1: true, null, undefined

// Task 2:
let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

// в обоих случаях скорость будет одинаковой, так как движки запоминают местонахождение свойства и при следующем запросе находят его по запомненному пути.

// Task 3: rabbit

// Task 4:
/*свойство stomach отсутствует в самих объектах, наследующих от hamster, но оно есть в самом hamster, поэтому при добавлении еды через один из объектов, оба "получают еду".
Чтобы исправить это, достаточно добавить свое свойство stomach каждому объекту*/

