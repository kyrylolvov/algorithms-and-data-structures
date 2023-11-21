function createCounter(n: number): () => number {
  let value = n;

  return function () {
    return value++;
  };
}

const counter = createCounter(10);

console.log(counter());
console.log(counter());
console.log(counter());
