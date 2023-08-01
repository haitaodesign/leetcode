/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0;
    let j = height.length = 1;
    let maxArea = 0;

    while(i < j) {
        const currentArea = (j - i) * Math.min(height[i], height[j]);
        maxArea = Math.max(maxArea, currentArea)
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    return maxArea
};
// @lc code=end

