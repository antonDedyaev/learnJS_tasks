//Task 1:
let user = {
  name: "John",
  years: 30
};

const { name, years: age, isAdmin: isAdmin = false } = user;

//Task 2:
function topSalary(salaries) {
    let userWithTopSalary = null;
    let topSalary = 0;
    for (const [name, salary] of Object.entries(salaries)) {
        if (salary > topSalary) {
            topSalary = salary;
            userWithTopSalary = name;
        }
    }
    return userWithTopSalary;
};
