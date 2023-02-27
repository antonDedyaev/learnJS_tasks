//Task 1:
let user = {
  name: "Василий Иванович",
  age: 35
};

const stringified = JSON.stringify(user);
const parsed = JSON.parse(stringified);

//Task 2:
let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
    return (key !== '' && value === meetup) ? undefined : value;
}));
