// Task 1:
let dictionary = Object.create(null, {
    toString: {
        value() {
            Object.keys(this).join()
        } 
    }
})

// Task 2: не одно и то же. Во всех случаях, кроме первого, выведется undefined, так как они орбращаются к прототипу.


