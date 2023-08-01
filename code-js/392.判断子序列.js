/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (t === s) return true
    else if (t === '') return false
    else if (s === '') return true
    const sLength = s.length
    const tLength = t.length
    let i = 0, j = 0
    while(i < sLength && j < tLength) {
        if (s[i] === t[j]) {
            i++;
        }
        j++;
    }
    return i === sLength;
};
// @lc code=end

