/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // 使用额外数组（O(n)）
    // const length = nums.length
    // const newArray = new Array(length)
    // for (let i = 0; i < length; i++) {
    //     newArray[(i+k) % length] = nums[i]
    // }
    // for (let i = 0; i < length; i++) {
    //     nums[i] = newArray[i]
    // }
    // 数组翻转(O(1))
    const reverse = function(nums, start, end) {
        while(start < end) {
            const temp = nums[start]
            nums[start] = nums[end]
            nums[end] = temp
            start += 1
            end -= 1
        }

    }
    k %= nums.length
    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, nums.length - 1)
1};
// @lc code=end

