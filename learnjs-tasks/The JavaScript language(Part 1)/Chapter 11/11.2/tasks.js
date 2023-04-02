// Task 1: выведется "1", второй resolve будет проигнорирован.

// Task 2:
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve, ms);
    })
};

// Task 3:
function showCircle(cx, cy, radius) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    return new Promise((resolve) => {
        setTimeout(() => {
            div.style.width = radius * 2 + 'px';
            div.style.height = radius * 2 + 'px';

            div.addEventListener('transitionend', function handler() {
                div.removeEventListener('transitionend', handler);
                resolve(div);
            });
        }, 0);
    })
};
