/**
 * 283. Move Zeroes
Easy
Topics
premium lock icon
Companies
Hint
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1

Follow up: Could you minimize the total number of operations done?

HINT 1:
In-place means we should not be allocating any space for extra array. 
But we are allowed to modify the existing array. However, as a first step, try coming up with a solution that makes use of additional space. 
For this problem as well, first apply the idea discussed using an additional array and the in-place solution will pop up eventually.

Hint 2:
A two-pointer approach could be helpful here. 
The idea would be to have one pointer for iterating the array and another pointer that just works on the non-zero elements of the array.
 */



// comment solution 1 🤯😕😕 
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// [0, 1, 0, 3, 12]
var moveZeroes0 = function (nums) {
	console.log('nums ==', nums);

	const length = nums.length;
	let repeatCount = 0
	let i = 0;

	nums.forEach((item, index) => {
		if (item == 0) {
			repeatCount += 1;
		}
	})

	console.log('first order nums 000 ', nums, length);

	while(i < length - repeatCount){
		if(nums[i] == 0){
			nums.splice(i, 1)
		}else{
			i++
		}
	}
	console.log('first order nums 111 ', repeatCount, nums);


	for (let i = nums.length; i < length; i++) {
		nums[i] = 0;
	}

	console.log('first order nums 222 ', nums);

	return nums

};

var moveZeroes = function (nums) {
	let left = 0;
	for(let right = 0; right < nums.length; right++){
		console.log(`Loop ~~~~`);
		console.log(`L: ${left}, R: ${right}`)
		
		console.log(nums)
		if(nums[right] !== 0){
			[nums[left], nums[right]] = [nums[right], nums[left]]
			console.log('after swap =======', nums)
			left++;
		}
	}
	return nums
	
};


let result = moveZeroes([0, 1, 0, 3, 12])
// let result = moveZeroes([1])
// let result = moveZeroes([0, 0, 1])
// let result = moveZeroes([45192, 0, -659, -52359, -99225, -75991, 0, -15155, 27382, 59818, 0, -30645, -17025, 81209, 887, 64648])



console.log(result);
