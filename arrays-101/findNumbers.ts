function findNumbers(nums: number[]): number {
  let evenNumberCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 === 0) evenNumberCount++;
  }

  return evenNumberCount;
}

console.log(findNumbers([555, 901, 482, 1771]));
