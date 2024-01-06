type Fn = (...params: number[]) => number;

function memoize(fn: Fn): Fn {
  let cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (key in cache) return cache[key];

    const result = fn(...args);
    cache[key] = result;

    return result;
  };
}

let callCount = 0;

const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});

memoizedFn(0, 0); // 5
memoizedFn(0, 0); // 5
console.log(callCount); // 1
