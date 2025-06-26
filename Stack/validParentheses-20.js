/**
 * 20. Valid Parentheses
Easy
Topics
premium lock icon
Companies
Hint
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true


 */

// IDEA When you encounter a closing bracket, check if the top of the stack was the opening for it. If yes, pop it from the stack. Otherwise, return false.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid1 = function (s) {
	let stackArray = ""

	const charMap = {
		'}': '{',
		']': '[',
		')': '('
	}

	for(let i = 0; i < s.length; i++){
		let char = s[i];
		if (stackArray.length > 0 && (char == ')' || char == '}' || char == ']') && stackArray[stackArray.length - 1] == charMap[char]) {
			stackArray = stackArray.slice(0, -1);
		}
		else {
			stackArray += char;
		}
		console.log(`i ==${i}, char=${char}, stackArray=${stackArray}`);
	}
	
	return stackArray.length == 0

};

var isValid = function (s) {
	let stackArray = []
	const charMap = {
		'}': '{',
		']': '[',
		')': '('
	}

	for (let i = 0; i < s.length; i++) {
		let char = s[i];
		if (stackArray.length > 0 && (char == ')' || char == '}' || char == ']') && stackArray[stackArray.length - 1] == charMap[char]) {
			stackArray.pop()
		}
		else {
			stackArray.push(char)
		}
		console.log(`i ==${i}, char=${char}, stackArray=${stackArray}`);
	}

	return stackArray.length == 0

};

// const result = isValid("()[]{}")
const result = isValid("]]")
// const result = isValid("([])")
console.log(result);