/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start

var MyQueue = function() {
    this.stack = []
    this.stackTwo = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.stackTwo.length <= 0) {
        while (this.stack.length !== 0) {
            this.stackTwo.push(this.stack.pop())
        }
    }
    return this.stackTwo.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.stackTwo.length <= 0) {
        while (this.stack.length !== 0) {
            this.stackTwo.push(this.stack.pop())
        }
    }
    var stackTwoLength = this.stackTwo.length
    return stackTwoLength && this.stackTwo[stackTwoLength - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.stack.length && !this.stackTwo.length
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

