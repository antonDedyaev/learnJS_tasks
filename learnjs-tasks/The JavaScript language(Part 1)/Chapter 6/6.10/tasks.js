// Task 1: функция выведет null

// Task 2: после первого связывания this не изменится. Поэтому вызов f покажет "Вася".

// Task 3: после привязки через bind создается новый объект, поэтому свойство test уже не будет - выведется undefined;

// Task 4:
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// Task 5:
askPassword(user.login.bind(user, true), user.login.bind(user, false));