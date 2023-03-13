//Task 1: Здесь можно воспользоваться WeakSet:
const messageIsRead = new WeakSet();
messageIsRead.add(messages[0]) // добавили одно прочитанное сообщение.
messageIsRead.add(messages[1]) // добавили еще одно прочитанное сообщение.
// Одинаковое сообщение дважды добавить сюда не удастся, поэтому так очень удобно отслеживать статус прочтения.

//Task 2: В данном случае удобнее использовать WeakMap:
const timeOfReading = new WeakMap();
timeOfReading.add(messages[0], new Date()) // добавили одно прочитанное сообщение со значением-датой.
timeOfReading.add(messages[1], new Date()) // добавили еще одно прочитанное сообщение со значением-датой.