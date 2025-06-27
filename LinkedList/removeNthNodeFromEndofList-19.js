/**
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]

 */


function ListNode(val, next) {
	this.val = (val === undefined ? 0 : val)
	this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// IDEA Maintain two pointers and update one with a delay of n steps.

// head:1,2,3,4,5 n:2
var removeNthFromEnd = function (head, n) {
	let dummy = new ListNode(-1)
	dummy.next = head;
	let slow = dummy;
	let fast = dummy;
	for(let i = 0; i <= n; i++){
		fast = fast.next;
	}
	console.log(`fast=${fast.val}`);  
	printList(dummy);
	while(fast !== null){
		fast = fast.next;
		slow = slow.next;
	}

	// console.log(`slow=${slow.val}, fast=${fast.val}`);
	slow.next = slow.next.next;

	printList(slow);
	printList(dummy.next);
	return dummy.next;
};


function printList(node) {
	while (node) {
		// console.log  use process.stdout.write() to print
		process.stdout.write(node.val + ' -> ');
		node = node.next;
	}
	console.log('null');
}


// let list1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
let list1 = new ListNode(1, new ListNode(2, null));
// printList(list1)
let result = removeNthFromEnd(list1, 1)
// IDEA
/**
 * The general approach is:

1. Create a dummy node pointing to the head.
 	handy tool mainly for modifying the list structure, especially near the head.
	Don’t need it if you only read or modify nodes beyond the head or if the problem guarantees head won’t change.
2. Set two pointers, slow and fast, at the dummy.
3. Move the fast pointer ahead by n steps.
4. Move both pointers forward until fast reaches the end.
5. Remove the node after slow.
6. Return dummy.next as the new head.
 */

