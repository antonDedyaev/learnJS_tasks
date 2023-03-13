// Task 1:
const listElements = document.querySelectorAll("li");

for (const liEl of listElements) {
    alert(liEl.firstChild.data);
    alert(liEl.getElementsByTagName("li").length);
}
const numOfLiElements = listElements.length; //16

// Task 2: 
/* Поскольку во время выполнения script страница еще не будет обработана полностью,
последним элементом будет сам script - выведется 1. */

// Task 3: выведется BODY

// Task 4: 
/* Он является объектом класса HTMLDocument. 
В иерархии он расположен так: Node -> Document -> HTMLDocument, т.е. наследует от Document и Node  */


