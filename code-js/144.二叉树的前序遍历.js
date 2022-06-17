/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {
    // 1. 递归算法
    // var res = []
    // var preorder = function (node) {
    //     if(!node) {
    //         return
    //     }
    //     res.push(node.val)
    //     preorder(node.left)
    //     preorder(node.right)
    // }
    // preorder(root)
    // return res
    // 2. 迭代算法
    var res = []
    if (!root) {
        return res
    }
    var stack = []
    stack.push(root)
    while(stack.length) {
        var current = stack.pop()
        res.push(current.val)

        if(current.right) {
            stack.push(current.right)
        }

        if(current.left) {
            stack.push(current.left)
        }
    }
    return res
};
// @lc code=end

