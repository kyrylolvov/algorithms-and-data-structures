export function powersOfTwo(n: number): number[] {
  let result: number[] = [];

  for (let i = 0; i < n + 1; i++) {
    result.push(2 ** i);
  }

  return result;
}

console.log(powersOfTwo(2));
