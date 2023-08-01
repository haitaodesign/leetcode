/*
 * @lc app=leetcode.cn id=1679 lang=javascript
 *
 * [1679] K 和数对的最大数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let time = 0;
    nums.sort((a, b) => a - b);
    let i = 0;
    let j = nums.length - 1;
    while(i < j) {
        if (nums[i] + nums[j] < k) {
            i++;
        } else if(nums[i] + nums[j] > k) {
            j--;
        } else {
            time++;i++;j--;
        }
    }
    return time
};
// @lc code=end

