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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree3 = function (preorder, inorder) {
	if (preorder.length === 0 || inorder.length === 0) return null;

	// preorder
	// 第一个就是root！但是判断不了的是 left(是否有children node)  right(是否有children nodes)
	console.log(preorder, inorder);
	let node = new TreeNode(preorder[0]);
	console.log(node.val)
	
	let rootIndex = inorder.indexOf(preorder[0]);
	// console.log('rootIndex ', rootIndex);  // 3的位置在 1

	let leftInOrder = inorder.slice(0, rootIndex);
	// console.log(leftInOrder)

	let rightInOrder = inorder.slice(rootIndex + 1)
	// console.log(rightInOrder)

	let leftPreOrder = preorder.slice(1, leftInOrder.length + 1);
	// console.log(leftPreOrder)

	let rightPreOrder = preorder.slice(leftInOrder.length + 1);
	// console.log(rightPreOrder)


	node.left = buildTree(leftPreOrder, leftInOrder);
	node.right = buildTree(rightPreOrder, rightInOrder);

	// 所有3 的左边是left tree
	// 所有3的右边是right tree
	// inorder
	// left(是否有children nodes, when to move to the root) root, right(是否有children nodes, when to end) 
	console.log(node)
	return node

};

var buildTree = function(preorder, inorder){
	if(preorder.length === 0) return null;

	const root = new TreeNode(preorder[0]);

	const mid = inorder.indexOf(preorder[0]);
	// left nodes length = mid - 1 + 1 = mid;

	root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
	root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
	return root;
}


// buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
console.log(buildTree([1, 2, 4, 3], [4, 2, 1, 3]))
