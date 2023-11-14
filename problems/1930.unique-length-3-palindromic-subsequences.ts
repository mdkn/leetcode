/*
 * @lc app=leetcode id=1930 lang=typescript
 *
 * [1930] Unique Length-3 Palindromic Subsequences
 */

// @lc code=start
function countPalindromicSubsequence(s: string): number {
  let cnt = 0;
  for (let i = 0; i < 26; ++i) {
    const cur = String.fromCharCode(i + 97);
    const l = s.indexOf(cur);
    const r = s.lastIndexOf(cur);
    if (l !== -1 && r !== -1 && l < r) {
      cnt += new Set(s.substring(l + 1, r)).size;
    }
  }
  return cnt;
}
// @lc code=end
