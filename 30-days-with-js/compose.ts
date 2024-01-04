type F = (x: number) => number;

function compose(functions: F[]): F {
  return functions.reduce(
    (acc, fn) => {
      return (result) => acc(fn(result));
    },
    (result) => result,
  );
}

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4));
