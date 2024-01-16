export function firstNonConsecutive(arr: number[]): null | number {
  let result: number | null = null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] !== arr[i] + 1) {
      result = arr[i + 1];
      break;
    }
  }

  return result;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
