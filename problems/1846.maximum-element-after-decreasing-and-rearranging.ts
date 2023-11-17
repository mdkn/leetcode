/*
 * @lc app=leetcode id=1846 lang=typescript
 *
 * [1846] Maximum Element After Decreasing and Rearranging
 *
 * Note:
 * Parameters > compareFn
 * If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.
 * ref) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 */

// @lc code=start
function maximumElementAfterDecrementingAndRearranging(arr: number[]): number {
  const sortedArray = arr.sort((a, b) => a - b)
  sortedArray[0] = 1
  for (let i = 1; i < sortedArray.length; i++) {
    if (sortedArray[i] - sortedArray[i - 1] > 1) {
      sortedArray[i] = sortedArray[i - 1] + 1
    }
  }
  return sortedArray[sortedArray.length - 1]
}

// @lc code=end
