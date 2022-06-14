/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    var previous, current, leftHead
    var dummy = new ListNode()
    dummy.next = head

    var p = dummy

    for (let i = 0; i < left - 1; i++) {
        p = p.next
    }

    leftHead = p

    var start = leftHead.next

    previous = start

    current = previous.next

    for (let i = left; i < right; i++) {
        var next = current.next
        current.next = previous
        previous = current
        current = next
    }

    leftHead.next = previous
    start.next = current
    return dummy.next
};
// @lc code=end

