/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams1 = function (strs) {
	let charMap = new Map();
	let results = [];

	for(let i = 0; i < strs.length; i++){
		let charStr = strs[i].split("").sort((a, b) => a.charCodeAt() - b.charCodeAt()).toString();
		if(charMap.has(charStr)){
			charMap.set(charStr, [...charMap.get(charStr), strs[i]])
		}else{
			charMap.set(charStr, [strs[i]])
		}
	}

	charMap.values().forEach(item => {
		results.push(item);
	});

	console.log('charMap === ', results);
	return results;

};

var groupAnagrams = function(strs){
	let charMap = new Map();

	for(let i = 0; i < strs.length; i++){
		let key = strs[i].split("").sort().join("");
		if (charMap.has(key)){
			charMap.get(key).push(strs[i]);
		}else{
			charMap.set(key, [strs[i]]);
		}
	}
	// console.log(charMap);

	return [...charMap.values()];
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
// groupAnagrams([""])
// console.log(groupAnagrams(["a"]))