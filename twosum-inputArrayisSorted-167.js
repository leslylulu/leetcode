/**
 * 167. Two Sum II - Input Array Is Sorted
Medium
Topics
premium lock icon
Companies
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

 

Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
Example 3:

Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
 

Constraints:

2 <= numbers.length <= 3 * 104
-1000 <= numbers[i] <= 1000
numbers is sorted in non-decreasing order.
-1000 <= target <= 1000
The tests are generated such that there is exactly one solution.
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
	// IDEA two - pointer technique, starting from both ends and moving inward to narrow down the search:

var twoSum = function (numbers, target) {
	let left = 0;
	let right = numbers.length - 1;
	while(left < right){
		// console.log(`left: ${left}, ${numbers[left]}, \nright: ${right}, ${numbers[right]}`)
		let sum = numbers[left] + numbers[right];
		if(sum == target){
			return [left + 1, right + 1];
		}else if(sum < target){
			left++;
		}
		else{
			right--;
		}
	};
};

const result = twoSum([2, 7, 11, 15], 9)
// const result = twoSum([1, 2, 3, 5, 7, 11, 15], 9)
// const result = twoSum([2, 3, 4], 6)
// const result = twoSum([-1, 0], -1)
// const result = twoSum([5, 25, 75], 100)
// const result = twoSum([1, 2, 3, 4, 4, 9, 56, 90], 8)
// const result = twoSum([-10, -8, -2, 1, 2, 5, 6], 0)





console.log(result)