// Task 1:
function spy(func) {
    function decor(...args) {
        decor.calls.push(args);
        return func.apply(this, args);
    }
    decor.calls = [];

    return decor;
};

// Task 2:
function delay(f, ms) {
    function decor(...args) {
        setTimeout(() => f.apply(this, args), ms);
    };
    return decor;
};

// Task 3:
function debounce(f, ms) {
    let isDebounced = false;
    function decor() {
        if (isDebounced) {
            return;
        }
        f.apply(this, arguments);
        isDebounced = true;
        setTimeout((isDebounced) => isDebounced = false, ms);
    }
    return decor;
};

// Task 4:
function throttle(func, ms) {

  let isThrottled = false;
  let savedArgs;
  let savedThis;

  function decor() {

    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);

    isThrottled = true;

    setTimeout(function() {
      isThrottled = false;
      if (savedArgs) {
        decor.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return decor;
}
