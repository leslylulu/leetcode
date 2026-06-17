/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function (root, p, q) {
	// Start walking down from the root. "node" is whichever node we're looking at right now.
	let node = root;

	while (node !== null) {
		// At each node there are really only three things that can happen:
		// both p and q are smaller than it, both are bigger than it,
		// or they split (one smaller, one bigger, or one equals this node).

		// First, the "both are smaller" case: the answer has to be somewhere
		// in the left subtree, because everything on the right is too big to contain them.
		// So we move down to the left: update node to node.left and keep looking.
		if (p.val < node.val && q.val < node.val) {
			node = node.left;
		}
		// Next, the "both are bigger" case: same idea, the answer has to live
		// in the right subtree, because everything on the left is too small.
		// So we move down to the right: update node to node.right.
		else if (p.val > node.val && q.val > node.val) {
			node = node.right;
		}
		// Otherwise we've hit the split point: either p and q sit on opposite
		// sides of this node, or one of them is exactly this node (which means
		// this node is the ancestor of the other one). Either way, this is the
		// lowest node that still covers both, so it's our answer. Return it.
		else {
			console.log(node.val);
			return node;
		}
	}

	return null;
};
// Test case
let root = new TreeNode(6);
root.left = new TreeNode(2);
root.right = new TreeNode(8);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);


lowestCommonAncestor(root, root.right, root.right.right); // 8，9
lowestCommonAncestor(root, root.left.left, root.left.right.right); // 0，5

// lowestCommonAncestor(root, 2, 4)


let root2 = new TreeNode(2);
root2.left = new TreeNode(1);
// lowestCommonAncestor(root2, 2, 1)

