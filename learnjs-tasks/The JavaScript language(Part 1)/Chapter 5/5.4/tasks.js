//Task 1: выведется 4;

//Task 2:
const styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
const middleElement = Math.floor((styles.length - 1) / 2);
styles[middleElement] = 'Классика';
alert(styles.shift())
styles.unshift('Рэп', 'Регги');

//Task 3: Поскольку массив - это объект, то при обращении к элементу массива arr[2], который является функцией, возвращающей this, выведется весь массив.

//Task 4:
function sumInput() {
    const allNumberInputs = [];
    let sum = 0;

    while (true) {
        const userInput = prompt('Введите число', 0);
        if (!isFinite(userInput) || userInput === null || userInput.length === 0) {
            break;
        }
        allNumberInputs.push(+userInput);
    }

    for (const number of allNumberInputs) {
        sum += number;
    }
    return sum;
};
alert(sumInput());

//Task 5:
function getMaxSubSum(arr) {
    let maxSum = 0;
    let subArrSum = 0;
    for (const number of arr) {
        subArrSum += number;
        maxSum = Math.max(subArrSum, maxSum);
        if (subArrSum < 0) {
            subArrSum = 0;
        }
    }
    return maxSum;
}
