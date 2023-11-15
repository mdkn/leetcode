/*
 * @lc app=leetcode id=605 lang=typescript
 *
 * [605] Can Place Flowers
 */

// @lc code=start
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  // 1 0 0 0 1
  // 1 0 0 0 0 0 1
  // 1 0 0 0 0 0 0 0 1
  // 3 + 2 * n
  // 1 -> 0
  // 2 -> 0
  // 3 -> 1
  // 4 -> 1
  // 5 -> 2
  // 6 -> 2
  // 7 -> 3

  const countToBePlanted = (n: number) => {
    return ((n - 1) / 2) | 0;
  };

  let canBePlantedCount = 0;
  let cnt = 0;

  flowerbed = [0].concat(flowerbed).concat([0]);

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      cnt += 1;
    } else {
      canBePlantedCount += countToBePlanted(cnt);
      cnt = 0;
    }
  }
  canBePlantedCount += countToBePlanted(cnt);
  return canBePlantedCount >= n;

  //   let canBePlantedCount = 0;
  //   for (let i = 0; i < flowerbed.length; i++) {
  //     if (
  //       flowerbed[i] === 0 &&
  //       (i === 0 || flowerbed[i - 1] === 0) &&
  //       (i == flowerbed.length - 1 || flowerbed[i + 1] === 0)
  //     ) {
  //       flowerbed[i] = 1;
  //       canBePlantedCount += 1;
  //     }
  //     if (canBePlantedCount >= n) {
  //       return true;
  //     }
  //   }
  //   return false;
}
// @lc code=end
