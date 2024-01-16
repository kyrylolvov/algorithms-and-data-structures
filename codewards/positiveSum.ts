export const positiveSum = (arr: number[]): number =>
  arr.reduce((acc, curr) => {
    if (curr < 0) return acc;
    return (acc += curr);
  }, 0);

console.log(positiveSum([1, -2, 3, 4, 5]));
