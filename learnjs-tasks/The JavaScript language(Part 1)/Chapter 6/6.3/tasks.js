// Task 1: Счетчики независимы, поэтому makeCounter2 покажет 0, 1.

// Task 2: Код будет работать, он выведет 1, 2, 1.

// Task 3: В результате выведется ошибка, так как мы пытаемся вызвать функцию SayHi(), созданную внутри if, снаружи этого блока.

// Task 4:
function sum(first) {
    function func(second) {
        return first + second;
    }
    return func;
};

// Task 5:
function inBetween(a, b) {
    return function(num) {
        return num >=a && num <=b;
    };
};

function inArray(array) {
    return function(num) {
        return array.includes(num);
    };
};

// Task 6:
function byField(param) {
    return (a, b) => a[param] > b[param] ? 1 : -1;
};

// Task 7: Из-за замыкания при вызове функции в массиве, она ссылается на i во внешнем лексическом окружении.
// К концу цикла эта переменная равна 10. Поэтому все элементы массива будут выводить именно 10.
// Для решения проблемы нужно создать локальную переменную.
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let index = i;
    let shooter = function() {
      alert( index );
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}
