/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    var len = temperatures.length
    var stack = []
    var res = (new Array(len)).fill(0)
    for (let i = 0; i < len; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            var top = stack.pop()
            res[top] = i - top
        }
        stack.push(i)
    }
    return res
};
// @lc code=end

