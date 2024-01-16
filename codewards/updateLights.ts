export function updateLight(current: string): string {
  const lights = ['green', 'yellow', 'red'];

  return lights[lights.findIndex((el) => el === current) + 1] ?? 'green';
}

console.log(updateLight('red'));
