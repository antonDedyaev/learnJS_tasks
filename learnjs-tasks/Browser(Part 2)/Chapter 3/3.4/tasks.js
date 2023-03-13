// Task 1:
/* Так происходит потому, что браузер при считывании атрибута onclick, создаёт функцию-обработчик с содержимым этого атрибута в качестве тела функции.
Достаточно будет в атрибуте onclick добавить return.
*/

// Task 2:
contents.onclick = function(event) {
    function handleSurfing(link) {
        const confirmToLeave = confirm(`Leave for ${link}?`);
        if (!confirmToLeave) {
            return false;
        }
    };

    const target = event.target.closest('a');
    if (target && contents.contains(target)) {
        return handleSurfing(target.getAttribute('href'));
    }
};

//Task 3:
thumbs.onclick = function(event) {
    event.preventDefault();
    const target = event.target.closest('a');
    if (!target) {
        return;
    }
    largeImg.setAttribute('src', target);
}