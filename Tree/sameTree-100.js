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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var isSameTree = function (p, q) {

	const loop = (leftNode, rightNode) => {
		// 4
		/**
		 *1. Both are null → We’ve reached the end; this branch is considered a match, so return true
			2. Only one is null → The shapes are different, so return false
			3. Both have values, but the values are not equal → Return false
			4. Both have values, and the values are equal → We can’t draw a conclusion yet; we need to check that both the left and right subtrees are the same
		 */
		// when is end?
		// or both null

		if(!leftNode && !rightNode) return true;

		if(!leftNode || !rightNode) return false;

		if (leftNode.val === rightNode.val ){
			return loop(leftNode.left, rightNode.left) && loop(leftNode.right, rightNode.right)
		}else{
			return false;
		}
	}
	return loop(p, q);
};

const leftNode = new TreeNode(1, new TreeNode(2, null, null), new TreeNode(3, null, null));
const rightNode = new TreeNode(1, new TreeNode(2, null, null), new TreeNode(3, null, null));


const node1 = new TreeNode(1, new TreeNode(2, null, null), new TreeNode(1, null, null));
const node2 = new TreeNode(1, new TreeNode(1, null, null), new TreeNode(2, null, null));


// console.log(leftNode);
// console.log(rightNode)

// console.log(isSameTree(leftNode, rightNode))
console.log(isSameTree(node1, node2))