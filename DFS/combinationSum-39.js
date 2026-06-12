/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
	candidates.sort((a,b) => a - b);
	const results = [];
	const path = [];

	function backTrack(startIndex, remaining){

		if(remaining === 0){
			results.push([...path]);
			console.log('find a solution === ', results);
			return; // return to the pop() after backTrack() this recursion
		}
		for(let i = startIndex; i < candidates.length; i++){
			console.log(`${i}, item=${candidates[i]}, remaining = ${remaining}`);
			if(candidates[i] > remaining){
				break;
			}
			path.push(candidates[i]);
			backTrack(i, remaining - candidates[i]);
			path.pop();
			console.log('path ===', path);
		}
	}

	backTrack(0, target);
	console.log('results == ', results)
	return results;
};

combinationSum([2, 3, 6, 7], 7);
// combinationSum([2, 3, 5], 8);
// combinationSum([2], 1);
// combinationSum([7, 5, 9, 23, 30, 12, 90], 37);
