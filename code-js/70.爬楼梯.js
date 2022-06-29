/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// var f = []
var climbStairs = function(n) {
    // 递归 + 记忆优化
    // if (n === 1) {
    //     return 1
    // }
    // if (n === 2) {
    //     return 2
    // }
    // if(f[n] === undefined) f[n] = climbStairs(n - 1) + climbStairs(n - 2)
    // return f[n]
    // 动态规划
    var f = []
    f[1] = 1
    f[2] = 2
    for (var i = 3; i <= n; i++) {
        f[i] = f[i - 1] + f[i - 2]        
    }
    return f[n]
};
// @lc code=end

