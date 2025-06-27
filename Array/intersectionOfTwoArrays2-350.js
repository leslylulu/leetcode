/**
 * 350. Intersection of Two Arrays II
Easy
Topics
premium lock icon
Companies
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
 

Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// FIX The worst case is probably O(n²).
var intersect2 = function (nums1, nums2) {
	let commonArray = []
	if(nums1.length > nums2.length){
		[nums1, nums2] = [nums2, nums1];
	}
	console.log(nums1, nums2)
	for(let i = 0; i < nums1.length; i++){
		// COMMENT includes() is O(n)
		if(nums2.includes(nums1[i])){
			commonArray.push(nums1[i]);
			// delete first char in nums2
			// COMMENT indexOf() is O(n)
			const index = nums2.indexOf(nums1[i]);
			if (index !== -1) {
				// COMMENT splice() is O(n)
				nums2.splice(index, 1);
			}
		}
	}
	return commonArray

};

var intersect = function (nums1, nums2) {
	const charMap = new Map();
	const result = []
	// IDEA for nums1 & for nums2 = O(n + m)
	for( let item of nums1){
		charMap.set(item, (charMap.get(item) || 0) + 1)
	}
	console.log(charMap)
	for(let item of nums2){
		if(charMap.get(item) > 0){
			result.push(item);
			charMap.set(item, charMap.get(item) - 1)
		}
	}
	return result;
};
// const result = intersect([1,2,2,1], [2,2])
const result = intersect([4, 4, 9, 5], [9, 4, 9, 8, 5])
console.log(result)
