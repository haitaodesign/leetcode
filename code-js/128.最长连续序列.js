/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let nums_set = new Set();
    for (const num in nums) {
        nums_set.add(num)
    }

    let longestStack = 0;

    for (const num in nums_set) {
       if(!nums_set.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;
            while(nums_set.has(currentNum + 1)) {
                currentNum += 1
                currentStreak += 1
            }
            longestStack = Math.max(longestStack, currentStreak)
       }
    }
    return longestStack
};
// @lc code=end

