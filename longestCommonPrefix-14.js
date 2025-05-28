/**
 * 14. Longest Common Prefix
Easy
Topics
premium lock icon
Companies
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	let commonPrefix = "";
	
	for(let i = 0; i < strs[0].length; i++){
		let char = strs[0].slice(i, i + 1);
		console.log('char ===', char);
		for(let j = 0; j < strs.length; j++){
			if (strs[j].slice(i, i + 1) !== char) {
				return commonPrefix
			}
		}
		commonPrefix += char;
	}
	return commonPrefix;
};

var longestCommonPrefix0 = function (strs) {
	let commonPrefix = strs[0];

	for (let i = 0; i < strs.length; i++) {
		while(!strs[i].startsWith(commonPrefix)){
			console.log('commonPrefix === ', commonPrefix);
			commonPrefix = commonPrefix.slice(0, -1);
			if(commonPrefix === '') return "";
		}
	}
	return commonPrefix;
};

// const result = longestCommonPrefix(["flower", "flow", "flight"]);
// const result = longestCommonPrefix(["dog", "racecar", "car"]);
const result = longestCommonPrefix(["uidhefff21", "uidhewwfff", "uidhefwwff", "uidhef90ff"]);

console.log('result == ',  result);