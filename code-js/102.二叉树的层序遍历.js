/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var res = []
    if (!root) {
        return res
    }
    var queue = []
    queue.push(root)

    while(queue.length) {
        var level = []
        var len = queue.length
        for (let i = 0; i < len; i++) {
            var top = queue.shift()
            level.push(top.val)
            if (top.left) {
                queue.push(top.left)
            }
            if (top.right) {
                queue.push(top.right)
            }
        }
        res.push(level)
    }
    return res
};
// @lc code=end

