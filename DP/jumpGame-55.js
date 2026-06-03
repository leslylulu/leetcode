/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
	const n = nums.length;
	let maxReachIndex = 0;
	maxReachIndex = Math.max(maxReachIndex, nums[0]);
	for(let i = 0; i < n; i++) {
		console.log(`i: ${i}, maxReach= ${maxReachIndex}, max=${Math.max(maxReachIndex, i + nums[i]) }`);
		if(i > maxReachIndex) {
			return false;
		}
		maxReachIndex = Math.max(maxReachIndex, i + nums[i]);
	}
	return true;
};

// console.log(canJump([2, 3, 1, 1, 4]));
// console.log(canJump([3, 0, 4, 0, 1]));
// console.log(canJump([1, 6, 0, 4, 2 ]));


var canJump2 = function(nums) {
	let n = nums.length;
	let goal = n - 1;
	// from last second element, check if we can jump to the goal
	// if yes, update the goal to current index
	for(let i = n - 2; i >= 0; i--) {
		console.log(`${i}: ${nums[i]}, goal: ${goal},  i + nums[i]: ${i + nums[i]}`);
		if(nums[i] + i >= goal) {
			goal = i;
		}
	}
	return goal === 0;
}

console.log(canJump2([3, 0, 4, 0, 1]));
console.log(canJump2([3, 0, 0, 1, 1]));
// console.log(canJump2([1, 6, 0, 4, 2 ]));



