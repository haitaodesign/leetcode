/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    // 1. 递归
    // if (n < 2) return n
    // return fib(n - 1) + fib(n - 2)
    // 2. 动态规划
     if (n < 2) return n
     var p = 0, q = 0, r = 1
     for (var i = 2; i <= n; i++) {
        p = q
        q = r
        r = p + q        
     }
     return r
};
// @lc code=end

