// Task 1:
const form = document.getElementById('prompt-form');
showPrompt("Введите что-нибудь...умное :)", function(event) {
    if (event.target === form.cancel) {
        alert('Вы ввели: null'); 
        form.submit();
    } else {
        if (!form.text.value) {
            return false;
        }
        alert(`Вы ввели: ${form.text.value}`);
    }
});

function showPrompt(html, callback) {
    const container = document.getElementById('prompt-form-container');
    const message = document.getElementById('prompt-message');
    container.style.display = 'none'; 
    document.body.insertAdjacentHTML('afterbegin', '<h2>Кликните на кнопку ниже</h2><input id="startButton" type="button" value="Кликните, чтобы увидеть форму">');
    message.innerHTML = html;
    document.addEventListener('click', starter);

    function starter(event) {
        if (event.target != document.getElementById('startButton')) {
            return;
        }
        container.style.background = 'rgba(171, 159, 159, .5)';
        container.style.display = ''; 
        document.body.style.overflowY='hidden'; 
        form.text.focus();
        form.onsubmit = callback;
        form.cancel.onclick = callback;
    }

}