/**
 * 242. Valid Anagram
Easy
Topics
premium lock icon
Companies
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false


Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?


 * 
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram0 = function (s, t) {
	if ([...s].length !== [...t].length) return false;
	let sDic = {};
	let tDic = {};
	for(let i = 0; i < s.length; i++ ){
		sDic[s[i]] = (sDic[s[i]] || 0) + 1;
		tDic[t[i]] = (tDic[t[i]] || 0) + 1;
	}
	console.log('sDic == ', sDic);
	console.log('tDic == ', tDic);

	for(let key in sDic){
		if (sDic[key] !== tDic[key]){
			return false
		}
	}
	
	return true;
};

/**
 * 
 * String.fromCharCode(97); // 'a'
	String.fromCharCode(122); // 'z'
	'a'.charCodeAt(0) // 97
	'z'.charCodeAt(0) // 122
	'A'.charCodeAt(0) // 65
	'Z'.charCodeAt(0) // 90
 */

var isAnagram = function (s, t) {
	if (s.length !== t.length) return false;

	//[a-z]
	const count = new Array(26).fill(0);

	for (let i = 0; i < s.length; i++) {
		console.log('charCodeAt ===', s.charCodeAt(i) - 97);
		count[s.charCodeAt(i) - 97]++;
	}
	console.log('count === ', count);

	for (let i = 0; i < t.length; i++) {
		const index = t.charCodeAt(i) - 97;
		count[index]--;
		console.log('count 222 ', count);
		if (count[index] < 0) return false; //early exit
	}

	return true;
};

const result = isAnagram('anagram', 'nagaram');
// const result = isAnagram('cat', 'car');
// const result = isAnagram('ab', 'a');
// const result =  isAnagram('yiieodoo', 'ooodyiiz')

console.log('result === ', result)