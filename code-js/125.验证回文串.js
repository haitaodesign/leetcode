/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let pattern = /[^a-z0-9]/gi;
    s = s.replace(pattern, '').toLocaleLowerCase();
    if(!s.length) {
        return true;
    }
    let i = 0;
    let j = s.length - 1;
    for (; i<=j; i++){
        if(i === j) {
            return true
        }
        if( s[i] === s[j]) {
            j--;
        } else {
            return false
        }
    }
    return true
};
// @lc code=end

