// Taks 1:
const scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

// Task 2:
const element = document.createElement('div');
element.style.overflowY = 'scroll'
element.style.height = '100px';
element.style.width = '100px';

document.body.append(element);
const scrollBarWidth = element.offsetWidth - element.clientWidth;

element.remove();

alert(scrollBarWidth);

// Task 3:
const centerFromTop = field.clientHeight / 2;
const centerFromLeft = field.clientWidth / 2;

ball.style.top = (centerFromTop - ball.clientHeight / 2) + 'px';
ball.style.left = (centerFromLeft - ball.clientWidth / 2) + 'px';

// Task 4:
/* 1) CSS-свойства width/height зависят от другого свойства – box-sizing, 
и изменение box-sizing, может сломать код.

2) CSS свойства width/height могут быть равны auto, то есть получиь конкретный размер не получится.

3) Учет полосы прокрутки. Свойство clientWidth всегда обозначает размер за вычетом прокрутки.
А в случае с CSS некоторые браузеры учитывают ширину полосы и вычитают ее из CSS-ширины, а некоторые нет.
*/