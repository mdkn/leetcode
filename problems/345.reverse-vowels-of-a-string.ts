/*
 * @lc app=leetcode id=345 lang=typescript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
function reverseVowels(s: string): string {
  const isVowel = (c: string) => new Set(["a", "i", "u", "e", "o"]).has(c)
  const replaceAt = (s: string, pos: number, char: string) =>
    s.slice(0, pos) + char + s.slice(pos + 1)

  const vowelsPos = []
  for (let i = 0; i < s.length; i++) {
    if (isVowel(s[i])) {
      vowelsPos.push(i)
    }
  }
  while (vowelsPos.length > 1) {
    const l = vowelsPos.shift()
    const r = vowelsPos.pop()
    if (l && r) {
      // for avoid to warn of @typescript-eslint/no-non-null-assertion
      const lchar = s[l]
      const rchar = s[r]
      s = replaceAt(s, l, rchar)
      s = replaceAt(s, r, lchar)
    }
  }
  return s
}
// @lc code=end
