//Task 1: Функция будет работать точно так же.
//Task 2:
function checkAge1(age) {
    return age > 18 ? true : confirm('Родители разрешили?');
}
function checkAge2(age) {
    return age > 18 || confirm('Родители разрешили?');
}
//Task 3:
function min(num1, num2) {
    if (num1 < num2) {
        return num1;
    }
    else if (num1 > num2) {
        return num2;
    }
    return num1;
}
//Task 4:
function pow(base, exponent) {
    return Math.pow(base, exponent);
}
var base = prompt('x?');
var exponent = prompt('n?');
alert(pow(Number(base), Number(exponent)));
