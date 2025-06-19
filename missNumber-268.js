/**
 * 268. Missing Number
Easy
Topics
premium lock icon
Companies
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

Example 1:

Input: nums = [3,0,1]

Output: 2

Explanation:

n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

Example 2:

Input: nums = [0,1]

Output: 2

Explanation:

n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]

Output: 8

Explanation:

n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
	let n = nums.length;
	let expedctdSum = n * (n + 1) / 2;
	// console.log(expedctdSum)
	// console.log(currentSum)
	// const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	// 0 is initial value
	let currentSum  = nums.reduce((a, b) => a+b, 0);
	return expedctdSum - currentSum;
	
};

// var missingNumber = function(nums){
// 	const numSet = new Set(nums);
// 	const n = nums.length;

// 	for (let i = 0; i <= n; i++) {
// 		if (!numSet.has(i)) {
// 			return i;
// 		}
// 	}
// }

let result4 = missingNumber([0])
let result2 = missingNumber([1])
let result3 = missingNumber([0, 1])
let result = missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])

console.log(result4)
console.log(result2)
console.log(result3)
console.log(result)
