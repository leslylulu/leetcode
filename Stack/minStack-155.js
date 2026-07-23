/**
 * 155. Min Stack
Medium

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:
MinStack() initializes the stack object.
void push(int value) pushes the element value onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

Example 1:
Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]
Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2

Constraints:
-231 <= val <= 231 - 1
Methods pop, top and getMin operations will always be called on non-empty stacks.
At most 3 * 104 calls will be made to push, pop, top, and getMin.
 */


var MinStack = function () {
	// ✅ 挂到 this 上，实例方法才能访问到
	this.array = []
	this.minStack = [];

};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function (value) {
	this.array.push(value)
	let currentMin = this.minStack[this.minStack.length - 1] ?? Infinity;
	if (value < currentMin){
		this.minStack.push(value)
	}else{
		this.minStack.push(currentMin)
	}
	console.log('after push', this.array, this.minStack)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	this.array.pop();
	this.minStack.pop();
	console.log('after pop', this.array, this.minStack);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	return this.array[this.array.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
	return this.minStack[this.minStack.length - 1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new MinStack()
obj.push(-2)
obj.push(0)
obj.push(-3)
console.log(obj.getMin())
obj.pop()
console.log(obj.top())
console.log(obj.getMin())



