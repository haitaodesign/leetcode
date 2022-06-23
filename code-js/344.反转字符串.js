/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // return s.reverse()
    var len = s.length
    for (let left = 0, right = len -1; left < right; left++, right --) {
        [s[left], s[right]] = [s[right], s[left]]        
    }
    return s
};
// @lc code=end

