/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == 0) {
      for (let j = arr.length - 1; j > i; j--) {
        arr[j] = arr[j - 1];
      }
    }
  }
}

duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]); // [1,0,0,2,3,0,0,4]
