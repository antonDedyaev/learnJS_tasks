// Task 1:
function printNumbers(from, to) {
    let result = from;

    const timerId = setInterval(() => {
        alert(result);
        if (result === to) {
            clearInterval(timerId);
        }
        result++;
    }, 1000);
}

function printNumbers(from, to) {
    let result = from;

    setTimeout(function timer() {
        alert(result)
        if (result !== to) {
            setTimeout(timer, 1000);
        }
        result++
    }, 1000);
}

// Task 2: setTimeout выполнится после цикла, значением i будет 100000000;

