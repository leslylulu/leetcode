// COMMENT： Priority Queue
/**
 * 2530. Maximal Score After Applying K Operations

You are given a 0-indexed integer array nums and an integer k. You have a starting score of 0.

In one operation:

choose an index i such that 0 <= i < nums.length,
increase your score by nums[i], and
replace nums[i] with ceil(nums[i] / 3).
Return the maximum possible score you can attain after applying exactly k operations.

The ceiling function ceil(val) is the least integer greater than or equal to val.

 
// IDEA Exmpale
Example 1:

Input: nums = [10,10,10,10,10], k = 5
Output: 50
Explanation: Apply the operation to each array element exactly once. The final score is 10 + 10 + 10 + 10 + 10 = 50.
Example 2:

Input: nums = [1,10,3,3,3], k = 3
Output: 17
Explanation: You can do the following operations:
Operation 1: Select i = 1, so nums becomes [1,4,3,3,3]. Your score increases by 10.
Operation 2: Select i = 1, so nums becomes [1,2,3,3,3]. Your score increases by 4.
Operation 3: Select i = 2, so nums becomes [1,1,1,3,3]. Your score increases by 3.
The final score is 10 + 4 + 3 = 17.

Constraints:

1 <= nums.length, k <= 105
1 <= nums[i] <= 109
 * 
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var maxKelements = function (nums, k) {
// 	let result = [];
// 	let tempNums = [...nums];
// 	let i = 0;
// 	let sum = 0;
// 	while (i < k) {
// 		let max = Math.max(...tempNums);
// 		result.push(max);
// 		let maxIndex = tempNums.indexOf(max);

// 		tempNums[maxIndex] = Math.ceil(max / 3);
// 		i++;
// 	}
// 	result.forEach(element => sum += element);
// 	return sum;
// };

var maxKelements = function (nums, k) {
	let sum = 0;

	// heapify 函数用于调整堆，以保持最大堆的特性
	function heapify(arr, n, i) {
		let largest = i; // Initialize largest as root
		let left = 2 * i + 1; // left = 2*i + 1
		let right = 2 * i + 2; // right = 2*i + 2

		// If left child is larger than root
		if (left < n && arr[left] > arr[largest]) {
			largest = left;
		}

		// If right child is larger than largest so far
		if (right < n && arr[right] > arr[largest]) {
			largest = right;
		}

		// If largest is not root
		if (largest !== i) {
			[arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap
			heapify(arr, n, largest); // Recursively heapify the affected sub-tree
		}
	}

	// Build max heap
	for (let i = Math.floor(nums.length / 2) - 1; i >= 0; i--) {
		heapify(nums, nums.length, i);
	}

	// Perform k operations
	for (let i = 0; i < k; i++) {
		// The root of the heap is the maximum element
		let maxVal = nums[0];
		sum += maxVal;

		// Replace the maximum value with ceil(maxVal / 3)
		nums[0] = Math.ceil(maxVal / 3);

		// Heapify the root to maintain max-heap property
		heapify(nums, nums.length, 0);
	}

	return sum;
};



// var maxKelements = function (nums, k) {

// 	// * MaxPriorityQueue is in leetcode function
// 	const maxHeap = new MaxPriorityQueue();

// 	for (let num of nums) {
// 		maxHeap.enqueue(num);
// 	}

// 	let score = 0;

// 	for (let i = 0; i < k; i++) {
// 		// maxHeap.dequeue() returns max element and removes it from the heap
// 		let maxVal = maxHeap.dequeue().element;

// 		// Add the largest value to the score
// 		score += maxVal;

// 		// Replace the number with ceil(maxVal / 3)
// 		// 优先队列会在内部维护一个堆（通常是最大堆或最小堆）结构来确保出队时总是能取出优先级最高的元素。
// 		// 这个堆结构会根据新插入的元素的值，自动调整元素的顺序
// 		maxHeap.enqueue(Math.ceil(maxVal / 3));
// 	}

// 	return score;
// };
let a1 = maxKelements([1, 10, 3, 3, 3], 3);
// let a2 = maxKelements([756902131, 995414896, 95906472, 149914376, 387433380, 848985151], 6);