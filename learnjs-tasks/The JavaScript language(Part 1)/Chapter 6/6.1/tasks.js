
// Task 1:

// второй по скорости вариант
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// самый медленный вариант (из-за сохранения в памяти вложенных вызовов)
function sumTo(n) {
    if (n === 1) {
        return n;
    } else {
        return n + sumTo(n - 1);
    }

}

// самый быстрый вариант (каждый раз используются одинаковые операции для всех операндов)
function sumTo(n) {
    return n * (n + 1) / 2;
}

// Если при помощи рекурсии посчитать sumTo(100000), возникнет ошибка из-за превышения размера стека.


// Task 2:
function factorial(n) {
    if (n === 1) {
        return n;
    } else {
        return n * factorial(n - 1);
    }
}

// Task 3:
// медленное решение через рекурсию
function fib(n) {
    return n <= 1 ? n : (fib(n - 1) + fib(n - 2));
}

//быстрое решение через цикл
function fib(n) {
    let first = 1;
    let second = 1;
    let third = 0;
    for (let i = 3; i <= n; i++) {
        third = first + second;
        first = second;
        second = third;
    }
    return second;
}


// Task 4: В принципе оба решения довольно просты
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
    alert(list.value);

    if (list.next) {
        printList(list.next);
    }
}

function printList(list) {
    let copy = list;
    while (copy) {
        alert(copy.value);
        copy = copy.next;
    }
}

// Task 5:
function reversedPrintList(list) {
    if (list.next) {
        reversedPrintList(list.next);
    }
    alert(list.value)

}

function reversedPrintList(list) {
    let arrOfValues = [];
    let copy = list;

    while(copy) {
        arrOfValues.push(copy.value);
        copy = copy.next;
    }
    for (let i = arrOfValues.length - 1; i >= 0; i--) {
        alert(arrOfValues[i])
    }
}
