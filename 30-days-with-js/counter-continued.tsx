type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): ReturnObj {
    let currentValue = init;

    return {
        increment: () => ++currentValue,
        decrement: () => --currentValue,
        reset: () => currentValue = init,
    }
};

const counter = createCounter(5)

console.log(counter.increment())
console.log(counter.reset())
console.log(counter.decrement())

