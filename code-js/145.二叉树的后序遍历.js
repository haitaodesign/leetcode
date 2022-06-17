/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    var res = []
    if(!root) {
        return res
    }
    var stack = []
    stack.push(root)

    while(stack.length) {
        var current = stack.pop()
        res.unshift(current.val)
        if(current.left) {
            stack.push(current.left)
        }
        if(current.right) {
            stack.push(current.right)
        }
    }
    return res
};
// @lc code=end

