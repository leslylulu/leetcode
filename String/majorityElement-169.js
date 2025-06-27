/**
 * 169. Majority Element
Easy
Topics
premium lock icon
Companies
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 

Follow-up: Could you solve the problem in linear time and in O(1) space?
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement0 = function (nums) {
	let max = 0;
	const map = {}
	for(let i = 0; i < nums.length; i++){
		map[nums[i]] = (map[nums[i]] || 0) + 1
	}
	max = Math.max(...Object.values(map));
	console.log(max)
	console.log(map)
	return Number(Object.keys(map).find(key => map[key] === max));
};

var majorityElement = function (nums) {
	let count = 0;
	let candidate = null;
	for(let item of nums){
		if(count == 0){
			candidate = item;
		}
		console.log(`item:${item}, candidate:${candidate}`)
		count += (item === candidate) ? 1 : -1
		console.log(`count == ${count}`)
	}
	return candidate;
};

const result = majorityElement([3, 2, 3])
// const result = majorityElement([1,2,3,4,2,1,2,2,2,2,1,1])
console.log(result, typeof result)
