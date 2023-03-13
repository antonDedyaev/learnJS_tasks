//Task 1:
function camelize(str) {
    const separatedWords = str.split('-');
    const result = separatedWords.map((word, index) => {
        return index > 0 ? (word[0].toUpperCase() + word.slice(1)) : word;
    })
    return result.join('');
};

//Task 2:
function filterRange(arr, a, b) {
    return arr.filter((number) => number >= a && number <= b);
};

//Task 3:
function filterRangeInPlace(arr, a, b) {
    arr.forEach((number, index) => {
        if (number < a || number > b) {
            arr.splice(index, 1);
        }
    });
};

//Task 4:
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

//Task 5:
function copySorted(arr) {
    return arr.slice().sort();
};

//Task 6:
function Calculator() {
    this.operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    };

    this.calculate = function(str) {
        const operands = str.split(' ');
        return this.operations[operands[1]](+operands[0], +operands[2]);
    }

    this.addMethod = function(name, func) {
        this.operations[name] = func;
    }
};

//Task 7:
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map((user) => user.name)

//Task 8:
let usersMapped = users.map((user) => {
    const fullName = `${user.name} ${user.surname}`;
    return { fullName, id: user.id };
}, []);

//Task 9:
function sortByAge(users) {
    return users.sort((a, b) => a.age - b.age);
};

//Task 10:
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

//Task 11:
function getAverageAge(users) {
    const totalAge = users.reduce((acc, user) => acc + user.age, 0);
    return totalAge / users.length;
};

//Task 12:
function unique(arr) {
    const uniqueArray = [];
    arr.forEach((el) => {
        if (!uniqueArray.includes(el)) {
            uniqueArray.push(el);
        }
    })
    return uniqueArray;
};

//Task 13:
function groupById(arr) {
    return arr.reduce((acc, user) => {
        const { id } = user;
        acc[id] = user;
        return acc;
    }, {})
};
