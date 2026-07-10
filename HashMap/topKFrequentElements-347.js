/**
347. Top K Frequent Elements
//* Medium

Given an integer array nums and an integer k, 
return the k most frequent elements. You may return the answer in any order.


Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]

Example 3:
Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2
Output: [1,2]


Constraints:
1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */


var topKFrequent2 = function (nums, k) {
	let frequentMap = new Map()
	let table = Array.from({ length: nums.length + 1 }, () => [])

	for (const num of nums) {
		frequentMap.set(num, (frequentMap.get(num) || 0) + 1)
		let count = frequentMap.get(num);
		if (count > 1) {
			table[count - 1] = table[count-1].filter(item => item != num)
		}
		table[count] = [...table[count], num]
	}
	console.log(frequentMap)

	table = table.filter(item => item.length > 0)
	console.log(table.flat().slice(-k))
	return table.flat().slice(-k)
};

var topKFrequent = function (nums, k) {
	const frequentMap = new Map()
	const bucket = []; 
	const result = [];
	for (const num of nums) {
		frequentMap.set(num, (frequentMap.get(num) || 0) + 1)
	}
	console.log(frequentMap)
	for(let [num, count] of frequentMap){
		console.log(num, count, bucket)
		bucket[count] = (bucket[count] || new Set()).add(num)
	}

	for(let i = bucket.length - 1; i >=0; i--){
		if(bucket[i]) result.push(...bucket[i])
		if(result.length === k) break;
	}
	console.log(result)
	return result;
}

let example1 = [1, 2, 1, 2, 1, 2, 3, 1, 3, 2]
let example2 = [1, 2, 1, 2, 1, 2] // 2
let example3 = [1]
let example4 = [3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8, 5, 6]


topKFrequent(example4, 10)