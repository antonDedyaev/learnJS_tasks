// Task 1:
class Rabbit extends Object {
  constructor(name) {
    super(name);
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

alert( rabbit.hasOwnProperty('name') );