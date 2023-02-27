//Task 1:
function sumSalaries(salaries) {
    let sum = 0;
    for (const salary of Object.values(salaries)) {
        sum += salary;
    }

    return sum;
};

//Task 2:
function count(obj) {
    return Object.keys(obj).length;
};
