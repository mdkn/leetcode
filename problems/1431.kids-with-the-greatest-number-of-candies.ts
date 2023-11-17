/*
 * @lc app=leetcode id=1431 lang=typescript
 *
 * [1431] Kids With the Greatest Number of Candies
 */

// @lc code=start
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let maxValue = 0
  for (let i = 0; i < candies.length; i++) {
    maxValue = Math.max(maxValue, candies[i])
  }
  const ans = []
  for (let i = 0; i < candies.length; i++) {
    ans.push(candies[i] + extraCandies < maxValue ? false : true)
  }
  return ans
}
// @lc code=end
