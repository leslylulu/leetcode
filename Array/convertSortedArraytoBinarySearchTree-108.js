/**
 * Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

 

Example 1:


Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:

Example 2:


Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.

 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
	this.val = (val === undefined ? 0 : val)
	this.left = (left === undefined ? null : left)
	this.right = (right === undefined ? null : right)
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
//IDEA 找中间 ➜ 建节点 ➜ 递归左半 ➜ 递归右半
var sortedArrayToBST = function (nums) {
	if(nums.length == 0) return null;
	// step 1
	const midIndex = Math.floor(nums.length / 2); // 7/2.floor = 3, index = 3(start from 0)
	// step 2
	const root = new TreeNode(nums[midIndex]);
	// step 3
	root.left = sortedArrayToBST(nums.slice(0, midIndex))
	// step 4
	root.right = sortedArrayToBST(nums.slice(midIndex + 1))
	console.log('root value', root.val)

	return root;
};

// let root = sortedArrayToBST([1, 3, 5, 7, 9, 11, 13])
let root = sortedArrayToBST([-30, -10, 20, 25, 30, 35, 40, 45, 50, 55, 60])


