//Task 1:
const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

const test = {};
//Task 2:
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
};

//Task 3: Да, можно.

//Task 4:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for (let salary in salaries) {
    sum += salaries[salary];
}

//Task 5:
function multiplyNumeric(obj) {
    for (let prop in obj) {
        if (typeof obj[prop] === 'number') {
            obj[prop] *= 2;
        }
    }
};
