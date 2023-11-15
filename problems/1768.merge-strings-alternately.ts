/*
 * @lc app=leetcode id=1768 lang=typescript
 *
 * [1768] Merge Strings Alternately
 */

// @lc code=start
function mergeAlternately(word1: string, word2: string): string {
  const wordLength1 = word1.length;
  const wordLength2 = word2.length;
  const wordLength = Math.max(wordLength1, wordLength2);
  let ans = "";
  for (let i = 0; i < wordLength; i++) {
    const a = i < wordLength1 ? word1.substring(i, i + 1) : "";
    const b = i < wordLength2 ? word2.substring(i, i + 1) : "";
    ans = ans + a + b;
  }
  return ans;
}
// @lc code=end
