/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	const n = nums.length;
	const dp = new Array(n).fill(0);

	// Base cases
	dp[0] = nums[0];
	if (n > 1) dp[1] = Math.max(nums[0], nums[1]);

	// Fill dp table: at each house, choose max between robbing or skipping
	for (let i = 2; i < n; i++) {
		// Rob current house: must skip i-1, so take dp[i-2] + nums[i]
		// Skip current house: inherit best so far → dp[i-1]
		console.log('DP Table: ', dp);
		console.log(`House ${i + 1}: If Rob = ${dp[i - 2] + nums[i]}, If Skip = ${dp[i - 1]}`);
		dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
	}
	return dp[n - 1];

};
// rob([1,2,3,1]) // 4
// rob([2,7,9,3,1]) // 12
rob([9, 1, 2, 12]) // 21

/**
 * 1. Clarify（确认边界）
"Can the array be empty? Can values be negative?" → assume non-empty, non-negative.

2. Approach（说思路，先别写代码）
"This is a classic DP problem. At each house I have two choices — rob it or skip it. 
If I rob house i, I can't rob i-1, so the best I can do is dp[i-2] + nums[i]. If I skip it, I inherit dp[i-1]. I take the max of the two."

 */