/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
	let i = m - 1; // nums1 last element
	let j = n - 1; // nums2 last element
	let k = m + n - 1; // nums1 last index
	while (i >= 0 && j >= 0) {
		if (nums1[i] > nums2[j]) {
			nums1[k] = nums1[i];
			i--;
		} else {
			nums1[k] = nums2[j];
			j--;
		}
		k--;
	}
	while (j >= 0) {
		nums1[k] = nums2[j];
		j--;
		k--;
	}
	console.log(nums1);
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
merge([1], 1, [], 0)
merge([0], 0, [1], 1)

