export function divisors(n: number) {
  return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, curr) => (n % curr === 0 ? acc + 1 : acc), 0);
}
