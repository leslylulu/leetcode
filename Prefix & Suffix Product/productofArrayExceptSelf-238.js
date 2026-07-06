/**
 * @param {number[]} nums
 * @return {number[]}
 */

// ! You must write an algorithm that runs in O(n) time and without using the division operation.

var productExceptSelf = function (nums) {
	const results = [];
	// 1x2x3x4 = 24
	// console.log(nums);

	let left = 1;
	let right = 1;

	// 如何做到一边累乘一遍拿到结果？
	// results[0] =      2 X 3 X 4 // nums[1](right) * nums[2](right) * nums[3](right);
	// results[1] = 1      X 3 X 4 // nums[0](left) * nums[2](right) * nums[3](right);
	// results[2] = 1 X 2      X 4 // nums[0](left) * nums[1](left) * nums[3](right);
	// results[3] = 1 X 2 X 3    // nums[0](left) * nums[2](left) * nums[1](left);

	for(let i = 0; i < nums.length; i++){
		results[i] = left;
		left *= nums[i];
		console.log(`i=${i}, ${results[i]}-then-${left}`)
	}
	console.log('first loop left === ', results, "\n");

	for (let j = nums.length - 1; j >= 0; j--) {
		console.log(`results[${j}]: ${results[j]} *= ${right}`);
		results[j] *= right;
		console.log(`right: ${right} *= ${nums[j]} nums[${j}]\n`)
		right *= nums[j];  
	}
	console.log('right === ', results);

};


productExceptSelf([1,2,3,4])

