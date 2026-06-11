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
 * @param {number} k
 * @return {number}
 */
var kthSmallest2 = function (root, k) {
	let valuesArray = [];
	console.log(root);

	const deepTree = (node) => {
		// 节点值可能是 0, 而 0 在 JS 里是 falsy 的,
		if(node === null){
			return; 
		}
		deepTree(node.left);
		console.log("node val", node.val);
		valuesArray.push(node.val)
		console.log(" ====== start right ========");
		deepTree(node.right);
	}

	deepTree(root);
	return valuesArray[k - 1];

};

var kthSmallest = function(root, k) {
	let count = 0;
	let kthValue = null;
	
	const traverse = (node) => {
		// kthValue !== null 🎁🎁🎁
		// means the result has been found, we can stop traversing the tree
		if(node === null || kthValue !== null){
			return;
		}
		traverse(node.left);
		count += 1;
		console.log(`val = ${node.val}, count = ${count}`);
		if (count === k){
			kthValue = node.val;
			return;
		}
		traverse(node.right);
	}
	traverse(root);
	return kthValue;
}

const tree = new TreeNode(5, new TreeNode(3, new TreeNode(2, new TreeNode(1, null, null), null), new TreeNode(4, null, null)), new TreeNode(6, null, null));
console.log(kthSmallest(tree, 3));
