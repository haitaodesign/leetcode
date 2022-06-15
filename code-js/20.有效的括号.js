/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // 保存括号的映射关系
    var bracketMap = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    }
    if (!s) {
        return true
    }
    var stack = []
    var len = s.length

    for (let i = 0; i < len; i++) {
        var char = s[i]
        if (char === "(" || char === "[" || char === "{") {
            stack.push(bracketMap[char])
        } else {
            if (!stack.length || stack.pop() !== char) {
                return false
            }
        }
    }
    return !stack.length
};
// @lc code=end

