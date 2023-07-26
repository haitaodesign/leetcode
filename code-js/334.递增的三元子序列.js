/*
 * @lc app=leetcode.cn id=334 lang=javascript
 *
 * [334] 递增的三元子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    const n = nums.length;
    if (n < 3) {
        return false
    }

    const leftMin = [];
    leftMin[0] = nums[0];
    for (let i = 1; i < n; i++) {
        leftMin[i] = Math.min(leftMin[i - 1], nums[i]);        
    }

    const rightMax = [];
    rightMax[n - 1] = nums[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i+1], nums[i])
    }

    for (let i = 1; i < n - 1; i++) {
        if (nums[i] > leftMin[i - 1] && nums[i] < rightMax[i + 1]) {
            return true;
        }        
    }
    return false;
};
// @lc code=end

