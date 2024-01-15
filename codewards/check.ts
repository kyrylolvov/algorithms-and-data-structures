export const check = (a: (number | string)[], x: number | string): boolean => a.findIndex((item) => item === x) > 0;

console.log(check([2, 0, 2, 1, 1, 4], 0));
