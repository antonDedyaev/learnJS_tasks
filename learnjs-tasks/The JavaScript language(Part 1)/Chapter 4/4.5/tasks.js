//Task 1: Да, если мы сделаем return с заранее иницализированным объектом в каждой из функций, то вместо this они вернут этот объект:
let sameObject = {};

function First() {
    return sameObject;
}

function Second() {
    return sameObject;
}

new First() == new Second();

//Task 2:
function Calculator() {
    this.read = function () {
        this.a = prompt('a?', 0);
        this.b = prompt('b?', 0);
    }

    this.sum = function() {
        return +this.a + +this.b;
    }

    this.mul = function() {
        return this.a * this.b;
    }
};

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

//Task 3:
function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        let input = prompt('Сколько нужно добавить?', 0);
        this.value += +input;
    }
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read(); 

alert(accumulator.value);