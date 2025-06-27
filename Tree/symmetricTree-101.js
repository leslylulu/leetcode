/**
 * 101. Symmetric Tree
Easy
Topics
premium lock icon
Companies
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 

Example 1:


Input: root = [1,2,2,3,4,4,3]
Output: true
Example 2:


Input: root = [1,2,2,null,3,null,3]
Output: false

 */

function TreeNode(val, left, right) {
	this.val = (val === undefined ? 0 : val)
	this.left = (left === undefined ? null : left)
	this.right = (right === undefined ? null : right)
}
var isSymmetric = function (root) {
	if (!root) return true;

	const isMirror = (left, right) => {
		console.log(`left=${left?.val}, right=${right?.val}`)

		if (!left && !right) return true
		if (!left || !right) return false; 
		if (left.val !== right.val) return false;
		if (left.val == right.val) {
			return isMirror(left.left, right.right) && isMirror(left.right, right.left); // true && false && true
		}
	}
	return isMirror(root.left, root.right);
};

// [1, 2, 2, 3, 4, 4, 3]
const tree = new TreeNode(1, new TreeNode(2, new TreeNode(3, null, null), new TreeNode(4, null, null)), new TreeNode(2, new TreeNode(4, null, null), new TreeNode(3, null, null)));
const result = isSymmetric(tree);
// console.log(tree)
console.log(result)
