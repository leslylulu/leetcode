/**
 * 11. Container With Most Water
Medium

//! 贪心+双指针 
You are given an integer array height of length n. 
There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, 
such that the container contains the most water.

Return the maximum amount of water a container can store.
Notice that you may not //* slant 倾斜 the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea2 = function (height) {

	let left = 0;
	let right = height.length - 1;
	let minHeight = Math.min(height[left], height[right]); // changing
	let maxResult = (right - left) * minHeight;
	console.log(right - left, maxResult)
	while(left < right){
		if(height[left] < height[right]){
			left += 1;
		}else{
			right -= 1;
		}
		minHeight = Math.min(height[left], height[right]); // changing
		if (maxResult < (right - left) * minHeight) {
			maxResult = (right - left) * minHeight;
		}
	}

	console.log(maxResult)

};

var maxArea = function(height){
	let left = 0;
	let right = height.length - 1;
	let maxResult = 0;

	while(left < right){
		const area = (right - left) * Math.min(height[left], height[right]);
		if(area > maxResult){
			maxResult = area;
		}

		height[left] < height[right] ? left++ : right--;

	}
	console.log(maxResult)
	return maxResult
}

// 7 X 7 = 49
// maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
maxArea([1, 4, 200, 4, 302, 4, 5, 159, 7]);
// maxArea([1,1])
