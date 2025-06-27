/**
 * 104. Maximum Depth of Binary Tree
Easy
Topics
premium lock icon
Companies
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:

Input: root = [1,null,2]
Output: 2
 

Constraints:

The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100

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
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
	if(!root) return 0;
	console.log(`val=${root.val}， left=${root?.left?.val || null}, right=${root?.right?.val || null}`);
	const leftDepth = maxDepth(root.left);
	const rightDepth = maxDepth(root.right);
	console.log(`leftDepth=${leftDepth}, rightDepth=${rightDepth}`)
	return Math.max(leftDepth, rightDepth) + 1;

};

// [3, 9, 20, null, null, 15, 7]
const tree = new TreeNode(3, new TreeNode(9, null, null), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
const result = maxDepth(tree);
console.log(result)