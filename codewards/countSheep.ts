export function countSheep(num: number): string {
  let result = '';

  for (let i = 1; i < num + 1; i++) {
    result += `${i} sheep...`;
  }

  return result;
}

console.log(countSheep(3));
