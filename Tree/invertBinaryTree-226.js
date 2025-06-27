/**
 * 226. Invert Binary Tree
Easy
Topics
premium lock icon
Companies
Given the root of a binary tree, invert the tree, and return its root.

 

Example 1:


Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
Example 2:


Input: root = [2,1,3]
Output: [2,3,1]
Example 3:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
	this.val = (val === undefined ? 0 : val)
	this.left = (left === undefined ? null : left)
	this.right = (right === undefined ? null : right)
}

var invertTree = function (root) {
	if (!root) return null;
	console.log(`val=${root.val}`)
	if(root?.left || root?.right){
		[root.right, root.left] = [invertTree(root.left), invertTree(root.right)]
	}
	return root
};

// [4,2,7,1,3,6,9]
const tree = new TreeNode(4, new TreeNode(2, new TreeNode(1, null, null), new TreeNode(3, null, null)), new TreeNode(7, new TreeNode(6, null, null), new TreeNode(9, null, null)));
const result = invertTree(tree);
console.log('invertTree ==', result);