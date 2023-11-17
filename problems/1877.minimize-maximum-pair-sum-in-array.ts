/*
 * @lc app=leetcode id=1877 lang=typescript
 *
 * [1877] Minimize Maximum Pair Sum in Array
 */

// @lc code=start
function minPairSum(nums: number[]): number {
  let max = 0;
  const sorted = nums.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length / 2; i++) {
    max = Math.max(max, sorted[i] + sorted[sorted.length - 1 - i]);
  }
  return max;
}
// @lc code=end
