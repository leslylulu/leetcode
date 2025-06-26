/**
 * 3. Longest Substring Without Repeating Characters
Medium
Topics
premium lock icon
Companies
Hint
Given a string s, find the length of the longest substring without duplicate characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

/**
 * @param {string} s
 * @return {number}
 */


var lengthOfLongestSubstring = function (s) {
	if(s.length == 0) return 0

	let slow = 0;
	let fast = 0;
	let tempString = "";
	let maxLength = 0;
	while(fast < s.length){
		if(tempString.includes(s[fast])){
			tempString = tempString.slice(1)
			slow++
		}else{
			tempString += s[fast];
			maxLength = Math.max(maxLength, tempString.length);
			fast++
		}
	}
	return maxLength;
};

// const result = lengthOfLongestSubstring('pwwkew');
// const result = lengthOfLongestSubstring('au');
// const result = lengthOfLongestSubstring('dvdf');
// const result = lengthOfLongestSubstring('abcabcbb');
// const result = lengthOfLongestSubstring('bbbbb');
const result = lengthOfLongestSubstring('abceeeeeabceeeabcdefeeeeeabc');
// const result = lengthOfLongestSubstring(' ');

console.log('result === ', result)


/**
 * a lot of variables are fine and those are necessary
 * Not good(Try to avoid): I also started comparing from s[0] and s[1], which led to some confusion and edge cases.
 * my sliding window idea was correct — I just needed to clean up the logic a bit
 * 
 */