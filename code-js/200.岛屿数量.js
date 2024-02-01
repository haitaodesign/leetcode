/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    const dfs = (i, j) => {
        // 判断是否越界
        if (i < 0 || i >= grid.length) return
        if (j < 0 || j >= grid[0].length) return
        if (grid[i][j] === '0') return
        // 沉没为水
        grid[i][j] = '0'
        // 上下左右四个方向递归
        dfs(i - 1, j)
        dfs(i + 1, j)
        dfs(i, j - 1)
        dfs(i, j + 1)
    }
    // 双层 for 循环遍历二维数据
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count += 1
                dfs(i,j)
            }
        }
    }
    return count
};
// @lc code=end

