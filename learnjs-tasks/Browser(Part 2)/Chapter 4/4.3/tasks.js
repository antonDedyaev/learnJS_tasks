// Task 1:
let form = document.forms.calculator;

form.money.oninput = calculator;
form.months.onchange = calculator;
form.interest.oninput =calculator;

function calculator() {
    const initial = +form.money.value;
    if (!initial) {
        return;
    }

    const years = form.months.value / 12;
    if (!years) {
        return;
    }

    const interest = form.interest.value / 100;
    if (!interest) {
        return;
    }

    const result = Math.round(initial * (1 + interest) ** years);

    document.getElementById('money-before').innerHTML = form.money.value;
    document.getElementById('money-after').innerHTML = result;
    document.getElementById('height-after').style.height = result / 100 + 'px';
}

calculator();