export function solution(str: string, ending: string): boolean {
  if (ending.length === 0) return true;

  return str.slice(-ending.length) === ending;
}

solution('abc', 'bc');
