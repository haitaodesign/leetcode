/*
 * @lc app=leetcode.cn id=1382 lang=javascript
 *
 * [1382] 将二叉搜索树变平衡
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
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    var nums = []

    function inorder (root) {
        if (!root) {
            return
        }
        inorder(root.left)
        nums.push(root.val)
        inorder(root.right)
    }

    function buildAVL (low, high) {
        if (low > high) {
            return null
        }
        var middle = Math.floor(low + (high - low) / 2)
        var current = new TreeNode(nums[middle])
        current.left = buildAVL(low, middle - 1)
        current.right = buildAVL(middle + 1, high)
        return current
    }

    inorder(root)

    return buildAVL(0, nums.length - 1)
};
// @lc code=end

