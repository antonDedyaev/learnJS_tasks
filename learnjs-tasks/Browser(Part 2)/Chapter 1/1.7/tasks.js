// Task 1: одинаково работают варианты 1 и 3.

// Task 2:
function clear(elem) {
    elem.innerHTML = '';
}

// Task 3: 
/* так происходит из-за того, что текст находится внутри тега table, что является ошибкой.
Браузер вставляет текст перед table, поэтому код удаления не срабатывает */


// Task 4:
const ul = document.createElement('ul');
document.body.append(ul);

while (true) {
    const liName = prompt('Введите текст для элемента списка');
    if (liName === ''|| liName === null) {
        break;
    }

    const li = document.createElement('li');
    li.textContent = liName;
    ul.append(li);
}

// Task 5:
function createTree(container, data) {
    container.append(recursiveTreeBuilder(data));
}

function recursiveTreeBuilder(treeNode) {
    if (Object.keys(treeNode).length === 0) {
        return;
    }

    const ul = document.createElement('ul');

    for (const key in treeNode) {
        const li = document.createElement('li');
        li.textContent = key;

        const liChild = recursiveTreeBuilder(treeNode[key]);
        if (liChild) {
            li.append(liChild);
        }

        ul.append(li);
    }

    return ul;
}

// Task 6:
const listElements = document.getElementsByTagName('li');

for (const li of listElements) {
    const childrenCount = li.getElementsByTagName('li').length;
    if (!childrenCount) {
        continue;
    }
    li.firstChild.data += '[' + childrenCount + ']';
}

// Task 7:
function createCalendar(elem, year, month) {
    const table = document.createElement('table');
    const dayInMonth = new Date(year, month, 0).getDate();
    const firstDay = new Date(year, month - 1).getDay();
    const dayOfWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

    const weeks = firstDay == 1 && dayInMonth == 28 ? 4 :
    firstDay == 0 && (dayInMonth == 31 || dayInMonth == 30) ||
    firstDay == 6 && dayInMonth == 31 ? 6 : 5;

    for (let i = 0; i <= weeks; i++) {
        const tr = document.createElement('tr');

        for (let k = 0; k < 7; k++) {
            if (i == 0) {
                const th = document.createElement('th');
                th.textContent = dayOfWeek[k];
                tr.append(th);
            } else {
                const td = document.createElement('td');
                tr.append(td);
            }
        }
        table.append(tr);
    }

    const tdColl = table.querySelectorAll('td');

    for (let i = firstDay; i < dayInMonth + firstDay; i++) {
        if (!firstDay) {
            tdColl[i + 6].textContent = i - firstDay + 1;
        } else {
            tdColl[i - 1].textContent = i - firstDay + 1;
        }
    }
    elem.append(table);
}

// Task 8:
//HTML
<div id="clock">
    <span class="hour">hh</span>:<span class="min">mm</span>:<span class="sec">ss</span>
</div>

// Код
let timerId;
  
function timerUpdate() {
    const date = new Date();
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    document.querySelector('.hour').innerHTML = hours;
    document.querySelector('.min').innerHTML = minutes;
    document.querySelector('.sec').innerHTML = seconds;
};

function clockStart () {
    timerId = setInterval(timerUpdate, 1000);
    timerUpdate();
};

function clockStop() {
    clearInterval(timerId);
    timerId = null;
};

// Task 9:
const firstLi = document.getElementById('one');
firstLi.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');

// Task 10:
const table = document.querySelector('table');

const onlyContent = Array.from(table.rows).slice(1);
const sorted = onlyContent
    .sort((a, b) => a.cells[0].innerHTML > b.cells[0].innerHTML ? 1 : -1);
table.tBodies[0].append(...sorted); 
