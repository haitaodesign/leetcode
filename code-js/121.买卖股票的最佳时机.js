/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxPrice = 0;
    let minPrice = prices[0]
    for (const price of prices) {
        maxPrice = Math.max(maxPrice, price - minPrice)
        minPrice = Math.min(minPrice, price)
    }
    return maxPrice
};
// @lc code=end

