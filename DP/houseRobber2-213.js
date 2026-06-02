/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	if (nums.length === 0) return 0;
	let n = nums.length;
	if (n === 1) return nums[0];
	if(n === 2) return Math.max(nums[0], nums[1]);

	let dp1 = new Array(n).fill(0);	
	let dp2 = new Array(n).fill(0);

	// if rob first house, can't rob last house
	dp1[0] = nums[0];
	dp1[1] = Math.max(nums[0], nums[1]);
	for (let i = 2; i < n - 1; i++) {
		dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + nums[i]);
	}

	// if skip first house, can rob last house
	// dp2[0] = 0; // skip first house
	dp2[1] = nums[1];
	dp2[2] = Math.max(nums[1], nums[2]);	
	for (let i = 3; i < n; i++) {
		dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + nums[i]);
	}
	console.log('DP1 (rob first): ', dp1);
	console.log('DP2 (skip first): ', dp2);

	return Math.max(dp1[n - 2], dp2[n - 1]);
};

// rob([1, 2, 3, 1]) // 4
// console.log(rob([11, 2, 30])) // 30;


var rob2 = function(nums) {
	if (nums.length === 0) return 0;
	let n = nums.length;
	if (n === 1) return nums[0];
	if(n === 2) return Math.max(nums[0], nums[1]);

	const robLinear = (houses) => {
		console.log(houses);
		let prev1 = 0, prev2 = 0;
		for (let current of houses) {
			// rob current: prev2 + current
			// skip current: still have prev1
			// currentMaximum = max of both choices, no matter what we choose, prev1 becomes currentMaximum and prev2 becomes old prev1
			let currentMaximum = Math.max(prev1, prev2 + current);
			// after one step, prev2 becomes old prev1
			// prev1 get new value of current maximum, which is the best we can do at current step
			prev2 = prev1;
			prev1 = currentMaximum; 
			console.log(`current ${current}: prev1 = ${prev1}, prev2 = ${prev2}`);
		}
		return prev1;
	};

	// Case 1: Rob first house, skip last
	const case1 = robLinear(nums.slice(0, n - 1));
	// Case 2: Skip first house, can rob last
	const case2 = robLinear(nums.slice(1));

	console.log('Case 1 (rob first): ', case1);
	console.log('Case 2 (skip first): ', case2);

	return Math.max(case1, case2);
}

// console.log(rob2([1, 2, 3, 1])) // 4
console.log(rob2([3, 2, 5, 1, 4])) 
// console.log(rob2([11, 2, 23, 12])) 

