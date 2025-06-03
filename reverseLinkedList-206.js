/**
 * 206. Reverse Linked List
Easy
Topics
premium lock icon
Companies
Given the head of a singly linked list, reverse the list, and return the reversed list.


Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
 

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
	this.val = (val === undefined ? 0 : val)
	this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function (head) {

	let curr = head;
	let prev = null;
	while (curr) {
		let nextTempNode = curr.next;
		curr.next = prev;
		prev = curr;
		curr = nextTempNode
	}
	return prev

};


function printList(node) {
	while (node) {
		// console.log  use process.stdout.write() to print
		process.stdout.write(node.val + ' -> ');
		node = node.next;
	}
	console.log('null');
}


// let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
// printList(head);
// let newHead = reverseList(head);
// printList(newHead)

let head = new ListNode(1, new ListNode(4, new ListNode(9, new ListNode(12, new ListNode(34)))));
printList(head);
let newHead = reverseList(head);
printList(newHead)
