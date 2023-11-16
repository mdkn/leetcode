/*
 * @lc app=leetcode id=1980 lang=typescript
 *
 * [1980] Find Unique Binary String
 */

// @lc code=start
function findDifferentBinaryString(nums: string[]): string {
  let ans = "";
  for (let i = 0; i < nums.length; i++) {
    const char = nums[i].substring(i, i + 1);
    ans += char === "1" ? "0" : "1";
  }
  return ans;
}
// @lc code=end
