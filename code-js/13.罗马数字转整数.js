/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanMap = new Map()
    romanMap.set('I', 1)
    romanMap.set('V', 5)
    romanMap.set('X', 10)
    romanMap.set('L', 50)
    romanMap.set('C', 100)
    romanMap.set('D', 500)
    romanMap.set('M', 1000)
    let result = 0
    const romanLength = s.length
    for (let i = 0; i < romanLength; i++) {
        const current = romanMap.get(s[i])
        if (i < romanLength && current < romanMap.get(s[i + 1])) {
            result -= current
        } else {
            result += current
        }
    }
    return result
};
// @lc code=end

