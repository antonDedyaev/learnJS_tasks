// Task 1:
function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    };

    counter.set = (value) => count = value;

    counter.decrease = () => count--;

    return counter;
};

//Task 2:
function sum(num) {
    let current = num;

    function next(nextNum) {
        current += nextNum;
        return next;
    };

    next.toString = function() {
        return current;
    };

    return next;
};

alert(sum(6)(-1)(-2)(-3) );