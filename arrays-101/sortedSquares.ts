function sortedSquares(nums: number[]): number[] {
  let squaredArray: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    squaredArray.push(nums[i] * nums[i]);
  }

  return squaredArray.sort((a, b) => a - b);
}

console.log(sortedSquares([-7, -3, 2, 3, 11]));
