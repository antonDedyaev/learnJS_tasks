//Task 1: вызов выбросит ошибку, так как this здесь вызывается не как метод, а как функция. Поэтому this здесь - это this функции makeUser().

//Task 2:
const calculator = {
    read() {
        this.a = prompt('a?', 0);
        this.b = prompt('b?', 0);
    },

    sum() {
        return +this.a + +this.b;
    },

    mul() {
        return this.a * this.b;
    },
};

//Task 3:
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() {
    alert( this.step );
    return this;
  }
};
