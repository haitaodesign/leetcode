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
    const length = nums.length;
    let light = [];
    let right = [];
    let answer = [];

    light[0] = 1;
    for (let i = 1; i < length; i++) {
        light[i] = nums[i-1] * light[i-1] 
        
    }

    right[length - 1] = 1
    for (let i = length - 2; i >=0 ; i--) {
        right[i] = nums[i + 1] * right[i + 1]
    }

    for (let i = 0; i < length; i++) {
        answer[i] = light[i] * right[i]
    }
    return answer;
    
};
// @lc code=end

