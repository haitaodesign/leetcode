/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return '';
    }
    let result = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        for (; j < result.length; j++) {
            if(result[j] !== strs[i][j]) {
                break;
            }
        }
        result = result.substring(0, j)
        if (result === '') {
            return result;
        }
    }
    return result
};
// @lc code=end

