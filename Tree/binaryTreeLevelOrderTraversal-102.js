/**
 * 102. Binary Tree Level Order Traversal
Medium
Topics
premium lock icon
Companies
Hint
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
 


 */

function TreeNode(val, left, right) {
	this.val = (val === undefined ? 0 : val)
	this.left = (left === undefined ? null : left)
	this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// IDEA - BFS
var levelOrder = function (root) {
	if(!root) return [];

	let result = []
	let queue = [root];
	while(queue.length > 0){
		let levelSize = queue.length; // 1
		let level = [];
		for(let i = 0; i < levelSize; i++){
			let node = queue.shift(); 
			console.log(node)
			console.log(typeof node)
			level.push(node.val);

			if(node.left) queue.push(node.left)
			if(node.right) queue.push(node.right)
		}
		// console.log(`queue length = ${queue.length}`);
		result.push(level);
	}
	return result;
};

// 0-3
// 1 - 9, 20
// 2 - 15, 7
// [3, 9, 20, null, null, 15, 7]
const tree = new TreeNode(3, new TreeNode(9, null, null), new TreeNode(20, new TreeNode(15, null, null), new TreeNode(7, null, null)));
// console.log(tree)
const result = levelOrder(tree);
