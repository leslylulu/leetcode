/**
 * 349. Intersection of Two Arrays
Easy
Topics
premium lock icon
Companies
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
	let set1 = new Set(nums1);
	let set2 = new Set(nums2);
	if (set1.size > set2.size){
		[set1, set2] = [set2, set1]
	}
	console.log(set1, set2);
	return [...set1].filter(item => set2.has(item))
	
};

// const result = intersection([2, 2], [1, 2, 2, 1])
// const result = intersection([3, 4, 9, 4], [9, 3, 9, 8, 4])
const result = intersection([4, 9, 5], [9, 4, 9, 8, 4])
console.log(result)

