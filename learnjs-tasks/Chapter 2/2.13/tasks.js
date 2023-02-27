//Task 1: последним значением будет 1, так как на следующей итерации i станет равной 0, т.е falsy, и цикл прервется.

//Task 2:  в первом случае выведутся 1,2,3,4, а во втором - 1,2,3,4,5.
//Во втором случае мы сравниваем i с 5 еще до прибавления единицы, поэтому и попадаем в условие alert, хотя i к этому моменту уже равно 5.

//Task 3: В обоих случаях выведется 0,1,2,3,4, так как шаг i++ и ++i выполняется перед проверкой условия.

//Task 4:
for (let i = 2; i <=10; i++) {
    if (i % 2 === 0) alert(i);
}

//Task 5:
let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

//Task 6:
let inputValue = 0;
while (inputValue <= 100) {
    inputValue = prompt('Введите число больше 100?', 0);
    if (!inputValue) break;
}

//Task 7:
let num = 10;
outerCycle: for (let i = 2; i <= num; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0) continue outerCycle;
    }
    alert(i);
}

