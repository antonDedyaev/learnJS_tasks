// Task 1:
function showNotification({top = 0, right = 0, className, html}) {
    const div = document.createElement('div');
    div.className = 'notification';

    if (className) {
        div.classList.add(className);
    }

    div.style.top = top + 'px';
    div.style.right = right + 'px';

    div.textContent = html;
    document.body.append(div);

    setTimeout(() => div.remove(),1500)
};