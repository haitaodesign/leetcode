/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {

    let perimeter = 0
    var dfs = function (grid, i, j) {

        if (i < 0 || i >= grid.length) return 1
        if (j < 0 || j >= grid[0].length) return 1
        if (grid[i][j] === 0) return 1
        if (grid[i][j] !== 1) return 0
        grid[i][j] = 2
        return dfs(grid, i - 1, j) 
            + dfs(grid, i + 1, j) 
            + dfs(grid, i, j - 1) 
            + dfs(grid, i, j + 1)
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                perimeter += dfs(grid, i, j)
            }
        }
    }
    return perimeter
};
// @lc code=end

