/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const length = nums.length

    if(length <= 2) {
        return length
    }

    let fast = 2, slow = 2
    while (fast < length) {
        if(nums[slow - 2] != nums[fast]) {
            nums[slow] = nums[fast]
            ++slow
        }
        ++fast
    }
    return slow
};
// @lc code=end

