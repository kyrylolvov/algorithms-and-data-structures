export function doubleChar(str: string): string {
  return str
    .split('')
    .map((el) => el.repeat(2))
    .join('');
}

console.log(doubleChar('String'));
