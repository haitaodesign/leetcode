/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    var len = nums.length
    var res = []
    var left = 0
    var right = k - 1
    while (right < len) {
        var max = calculateMax(nums, left, right)
        res.push(max)
        left++
        right++
    }
    return res
};

function calculateMax (arr, left, right) {
    if (!arr || !arr.length) {
        return
    }

    var maxNumber = arr[left]
    for (let i = left; i <= right; i++) {
        if (arr[i] > maxNumber) {
            maxNumber = arr[i]
        }
    }
    return maxNumber
}
// @lc code=end

