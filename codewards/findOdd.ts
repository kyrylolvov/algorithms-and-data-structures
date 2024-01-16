export const findOdd = (xs: number[]): number => {
  return xs.reduce((result, num) => result ^ num, 0);
};

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
