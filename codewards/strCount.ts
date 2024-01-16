export function strCount(str: string, letter: string): number {
  return str.split('').filter((s) => s == letter).length;
}

console.log(strCount('Hello', 'l'));
