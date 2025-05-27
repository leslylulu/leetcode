/**
 * 1. Two Sum
Solved
Easy
Topics
premium lock icon
Companies
Hint
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	const pairIdx = {};
	for(let i = 0; i < nums.length; i++) {
		console.log('pairIdx ===', pairIdx)
		const number = nums[i];
		console.log('number ===', number)
		if (target - number in pairIdx) { // key condition
			return [i, pairIdx[target - number]];
		}
		pairIdx[number] = i;
	}
}

// const result = twoSum([3, 2, 4],6);
// console.log('result = ', result);


// const result2 = twoSum([2, 7, 9, 4], 9);
// console.log('result2 = ', result2);

const result3 = twoSum([2, 23, 7, 9, 4], 16);
console.log('result = ', result3);

/**
 * conclusion:
 * 1. pairIdx[number] = i; typeof key is string 
 * 2. if ((target - number) in pairIdx) '2' in {'2': 0, '23': 1} === true
 * is faster than using indexOf() method
 */

