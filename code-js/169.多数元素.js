/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let counts = new Map()
    for (const num of nums) {
        if (!counts.has(num)) {
            counts.set(num, 1)
        } else {
            counts.set(num, counts.get(num) + 1)
        }
        if (counts.get(num) > (nums.length / 2)) return num
    }

};

// @lc code=end

