// Task 1: необходимо вызвать конструктор наследующего класса через super();

// Task 2:
class ExtendedClock extends Clock {
    constructor(params) {
        this.params = params;
        super(params);
        const { precision = 1000 } = params;
        this.precision = precision;
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
  }

}
