/**
 * 647. Palindromic Substrings
Medium

Given a string s, return the number of palindromic substrings in it.
A string is a palindrome when it reads the same backward as forward.
A substring is a contiguous sequence of characters within the string.

Example 1:
Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".

Example 2:
Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

Constraints:
1 <= s.length <= 1000
s consists of lowercase English letters.
 */

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
	if(s.length === 0) return 0;
	let count = 0;

	const expand = (left, right) => {
		// console.log(`${left} = ${s[left]}, ${right} = ${s[right]}, count = ${count}`);
		while(left >= 0 && right < s.length && s[left] == s[right] ){
			console.log('Find:', s.substring(left, right + 1));
			count += 1;
			left -= 1;
			right += 1;
		}
	}
	for(let i = 0; i < s.length; i++){
		expand(i, i);
		expand(i, i + 1);
	}
	console.log('count = ', count);
	return count;

};

// substring 
// ee: same character, palindrome
// aba: same character at the two ends, palindrome

// countSubstrings('abc');
// countSubstrings('aba');
countSubstrings('leveluigehhihh');