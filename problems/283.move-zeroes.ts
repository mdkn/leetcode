/*
 * @lc app=leetcode id=283 lang=typescript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  if (nums.length === 1) return
  let nonZeroIndex = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex++] = nums[i]
    }
  }
  while (nonZeroIndex < nums.length) {
    nums[nonZeroIndex++] = 0
  }

  // const zeros = []
  // const nonZeros = []
  // for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] === 0) {
  //         zeros.push(nums[i])
  //     } else {
  //         nonZeros.push(nums[i])
  //     }
  // }
  // nums = nonZeros.concat(zeros)
}
// @lc code=end
