// Task 1:
document.body.firstElementChild;
document.body.lastElementChild;
document.body.lastElementChild.lastElementChild;

// Task 2: в первом случае да. Во втором случае - нет, так как перед children[0] могут быть узлы, не являющиеся элементом.

// Task 3:
let table = document.body.firstElementChild;
for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[i].style.backgroundColor = 'red';
}

