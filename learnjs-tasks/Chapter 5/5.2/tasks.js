//Task 1:
const firstNumber = +prompt('Введите первое число', '');
const secondNumber = +prompt('Введите второе число', '');
alert(firstNumber + secondNumber);

/*Task 2: Оба числа округляются по разному из-за потери точности в бинарном представлении дробей.
В случае с числом 1.35 потеря точности увеличивает число (хранимое число >1.35), а в случае с 6.35, наоборот, уменьшает(хранимое число<6.35).
Чтобы исправить погрешность с округлением, можно умножить 6.35 на 10, уменьшив кол-во числе после точки. И затем применить toFixed*/

//Task 3:
function readNumber() {
    const inputNumber = prompt('Введите число', 0);
    if (!isFinite(inputNumber)) {
        return readNumber();
    }
    if (inputNumber === '' || inputNumber === null) {
        return null;
    }
    return +inputNumber;
}
alert(`Число: ${readNumber()}`);

/*Task 4: Цикл будет бесконечным, так как условие i != 10 будет всегда true.
Причина - потеря точности в бинарном представлении дробей, в том числе при их сложении.*/

//Task 5:
function random(min, max) {
    return Math.random() * (max - min) + min;
}

//Task 6:
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


