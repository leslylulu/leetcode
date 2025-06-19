/**
 * Example 1:

Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
Example 2:

Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
Output: 7
Explanation: All strings are consistent.
Example 3:

Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
Output: 4
Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
 */

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
// hash table
var countConsistentStrings = function (allowed, words) {
	let count = 0;
	let allowedSet = new Set(allowed);

	for(let item of words){
		let isValid = true;
		for(let char of item){
			if(!allowedSet.has(char)){
				isValid = false;
			}
		}
		if(isValid) count++
	}

	return count
};

let result = countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]);
let result2 = countConsistentStrings("cad", ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"]);
let result3 = countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"]);


console.log(result);
console.log(result2);
console.log(result3);

