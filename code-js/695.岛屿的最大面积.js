/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxArea = 0

    const area = function (grid, i, j) {
        if (!(i >= 0 && i < grid.length && j >= 0 && j < grid[0].length)) return 0
        if (grid[i][j] !== 1) return 0
        grid[i][j] = 2
        return 1 + area(grid, i - 1, j)
            + area(grid, i + 1, j)
            + area(grid, i, j -1)
            + area(grid, i, j + 1)
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                const a = area(grid, i, j)
                maxArea = Math.max(maxArea, a)
            }            
        }
    }
    return maxArea
};
// @lc code=end

