function* pseudoRandom(seed) {
    let result = seed;

    while(true) {
        result = result * 16807 % 2147483647;
        yield result;
    }
};