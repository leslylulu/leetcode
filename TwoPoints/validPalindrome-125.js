/**
 * 125. Valid Palindrome
Easy

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
and removing all non-alphanumeric characters, 
it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	let left = 0;
	let right = s.length - 1;
	// const isValid = (char) => {
	// 	const code = char.toUpperCase().charCodeAt();
	// 	return (code >= 48 && code <= 57) || (code >= 65 && code <= 90)
	// }

	const isValid = (char) => {
		return /[a-zA-Z0-9]/.test(char);
	}
	while(left < right){
		if(!isValid(s[left])){
			left++;
		}else if(!isValid(s[right])){
			right--;
		}else if(s[left].toUpperCase() !== s[right].toUpperCase()){
			return false;
		}else{
			left++;
			right--;
		}
	}
	return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("race a car"));
// console.log(isPalindrome("0P"));
// console.log(isPalindrome("race a car"));

