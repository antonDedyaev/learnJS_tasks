// Task 1:
let textarea = null;
const view = document.getElementById('view');

view.onclick = function() {
    toggleTextArea();
};

function toggleTextArea() {
    textarea = document.createElement('textarea');
    textarea.classList.add('edit');
    textarea.value = view.innerHTML;

    textarea.onkeydown = function(event) {
        if (event.key === 'Enter') {
            this.blur();
        }
    }

    textarea.onblur = function() {
        backToDiv();
    }

    view.replaceWith(textarea);
    textarea.focus();
};

function backToDiv() {
    view.innerHTML = textarea.value;
    textarea.replaceWith(view);
};

// Task 2:
let table = document.getElementById('bagua-table');

table.addEventListener('click', startEdit);

function startEdit(e){
    const el = e.target.closest('td');

    if (!el) {
        return;
    }
    if (!table.contains(el)) {
        return;
    }

    const lastElValue = el.innerHTML.trim();

    const textarea = createTextArea(lastElValue, el.offsetHeight);
    

    let buttonsContainer = document.createElement('div'),
        saveButton = createButton('OK'),
        cancelButton = createButton('Cancel');

    buttonsContainer.append(saveButton, cancelButton);

    cancelButton.onclick = function() {
        el.innerHTML = lastElValue;
        table.addEventListener('click', startEdit)
    }

    saveButton.onclick = function() {
        el.innerHTML = textarea.value;
        table.addEventListener('click', startEdit)
    }

    el.innerHTML = '';
    el.append(textarea, buttonsContainer);
    textarea.focus();

    table.removeEventListener('click', startEdit)
}

function createButton(btnText) {
    const button = document.createElement('button');
    button.textContent = btnText;
    return button;
}

function createTextArea(textValue, textHeight) {
    const textarea = document.createElement('textarea');
    textarea.value = textValue;
    textarea.style.height = textHeight + 'px';
    return textarea;
}


// Task 3:
//CSS - добавляем position
/* 
#mouse {
    position: fixed;
}
*/
mouse.tabIndex = 0;

mouse.onclick = function() {
    this.style.top = this.getBoundingClientRect().top + 'px';
    this.style.left = this.getBoundingClientRect().left + 'px';
};

mouse.onkeydown = function(event) {
    switch(event.key) {
    case 'ArrowUp':
        this.style.top = parseInt(this.style.top) - this.offsetHeight + 'px';
        return false;
    case 'ArrowRight':
        this.style.left = parseInt(this.style.left) + this.offsetWidth + 'px';
        return false;
    case 'ArrowDown':
        this.style.top = parseInt(this.style.top) + this.offsetHeight + 'px';
        return false;
    case 'ArrowLeft':
        this.style.left = parseInt(this.style.left) - this.offsetWidth + 'px';
        return false;
    }
};