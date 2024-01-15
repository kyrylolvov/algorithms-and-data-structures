export function binaryArrayToNumber(arr: number[]): number {
  let result = 0;

  arr.reverse().map((_, i) => {
    if (_ !== 0) result += 2 ** i;
  });

  return result;
}

console.log(binaryArrayToNumber([0, 0, 1, 0]));
