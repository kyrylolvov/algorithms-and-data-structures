function findMaxConsecutiveOnes(nums: number[]): number {
  let maxConsecutiveCount = 0;
  let currentConsecutivcCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentConsecutivcCount++;
      maxConsecutiveCount = Math.max(maxConsecutiveCount, currentConsecutivcCount);
    } else {
      currentConsecutivcCount = 0;
    }
  }

  return maxConsecutiveCount;
}

console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 1, 0, 1])); // 3
