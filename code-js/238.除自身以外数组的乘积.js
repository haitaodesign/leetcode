/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // 1. 空间复杂度 O(N)
    // const length = nums.length;
    // let light = [];
    // let right = [];
    // let answer = [];

    // light[0] = 1;
    // for (let i = 1; i < length; i++) {
    //     light[i] = nums[i-1] * light[i-1] 
        
    // }

    // right[length - 1] = 1
    // for (let i = length - 2; i >=0 ; i--) {
    //     right[i] = nums[i + 1] * right[i + 1]
    // }

    // for (let i = 0; i < length; i++) {
    //     answer[i] = light[i] * right[i]
    // }

    // 2. 空间复杂度 O(1)
    const length = nums.length
    const answer = []

    answer[0] = 1
    for (let i = 1; i < length; i++) {
        answer[i] = nums[i - 1] * answer[i - 1]
    }

    let right = 1
    for (let i = length - 1; i >= 0; i--) {
        answer[i] = answer[i] * right
        right *= nums[i]
    }
    return answer;
    
};
// @lc code=end

