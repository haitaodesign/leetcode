/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var len = nums.length
    var current = []
    var res = []
    var visited = {}

    function dfs (nth) {
        if (nth === len) {
            res.push(current.slice())
            return
        }
        for (let i = 0; i < len; i++) {
            if(!visited[nums[i]]) {
                visited[nums[i]] = 1
                current.push(nums[i])
                dfs(nth + 1)
                current.pop()
                visited[nums[i]] = 0
            }        
        }
    }
    dfs(0)
    return res
};
// @lc code=end

