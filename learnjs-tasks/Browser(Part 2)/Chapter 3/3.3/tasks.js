// Task 1:
document.addEventListener('click', function(event) {
    const target = event.target;
    if (target.className !== 'remove-button') {
        return;
    }
    target.closest('.pane').remove();
})

// Task 2:

//CSS
/*
.tree span {
    cursor: pointer;
}
*/

const tree = document.getElementById('tree');

const liEls = tree.querySelectorAll('li');
for (let li of liEls) {
    const spanEl = document.createElement('span');
    li.prepend(spanEl);
    spanEl.append(spanEl.nextSibling);
}

tree.addEventListener('click', function(event) {
    const target = event.target;
    if (target.tagName !== 'SPAN') {
        return;
    }
    const ulEl = target.parentNode.querySelector('ul');
    if (!ulEl) {
        return;
    }
    ulEl.hidden = !ulEl.hidden;
});

// Task 3:
const table = document.getElementById('grid');

table.onclick = function(event) {
    const target = event.target;
    if(target.tagName !== 'TH') {
        return;
    }
    const th = target;

    sortTable(th.cellIndex, th.dataset.type);
};

function sortTable(colNum, type) {
    const tbody = table.querySelector('tbody');

    const arrOfRows = Array.from(tbody.rows);

    let compareHandler;

    switch (type) {
        case 'number':
            compareHandler = function(a, b) {
                return a.cells[colNum].innerHTML - b.cells[colNum].innerHTML;
            };
            break;
        case 'string':
            compareHandler = function(a, b) {
                return a.cells[colNum].innerHTML > b.cells[colNum].innerHTML ? 1 : -1;
            };
            break;
        default:
            break;
    }

    arrOfRows.sort(compareHandler);

    tbody.append(...arrOfRows);
};

// Task 4:
const div = document.createElement('div');
div.classList.add("tooltip");

document.addEventListener('mouseover', function(event) {

    const target = event.target.dataset.tooltip;

    if(!target) {
        return;
    }

    const coords = event.target.getBoundingClientRect();

    if(div.hidden) {
        div.hidden = false;
    }

    div.innerHTML = target;
    document.body.append(div);

    if(coords.y < 0) {
        div.style.top = event.target.offsetHeight + coords.y + 5 + 'px';
    } else {
        div.style.top = coords.y - div.offsetHeight - 5 + 'px';
    }

    div.style.left = coords.left + 'px';

});

document.addEventListener('mouseout', function(event) {

    const target = event.target.dataset.tooltip;

    if(!target) {
        return;
    }

    div.hidden = true;

});