/*
 * @lc app=leetcode id=1071 lang=typescript
 *
 * [1071] Greatest Common Divisor of Strings
 */

// @lc code=start
function gcdOfStrings(str1: string, str2: string): string {
  const gcd = (x: number, y: number): number => {
    return x % y ? gcd(y, x % y) : y
  }

  if (str1 + str2 !== str2 + str1) return ""

  return str1.substring(0, gcd(str1.length, str2.length))
}
// @lc code=end
