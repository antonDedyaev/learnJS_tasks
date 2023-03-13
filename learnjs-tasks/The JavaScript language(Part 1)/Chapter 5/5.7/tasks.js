//Task 1:
function unique(arr) {
    return Array.from(new Set(arr));
};

//Task 2:
function aclean(arr) {
    const mappedArr = new Map();
    arr.forEach((word) => {
        mappedArr.set(word.toLowerCase().split('').sort().join(''), word);
    });
    return Array.from(mappedArr.values())
    
};

/*Task 3: Метод push работает с массивами, а не с объектами. 
А map.keys() возвращает именно итерируемый объект, а не массив.
Можно создать массив из ключей - Array.from(keys) - тогда push сработает.*/
