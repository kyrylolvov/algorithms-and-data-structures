function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  let result: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }

  return result;
}

map([1, 2, 3], function plusone(n) {
  return n + 1;
});
